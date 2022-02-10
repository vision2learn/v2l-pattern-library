const { DateTime } = require("luxon");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");
const json2yaml = require('json-to-pretty-yaml');
const hslToHex = require('@paulobontempo/hsl-to-hex');
const Image = require('@11ty/eleventy-img');
const path = require("path");
const fs = require("fs");
const MarkdownIt = require('markdown-it');
const ssri = require('ssri');

let tilde = process.env.ELEVENTY_ENV === 'dotnet' ? '~' : ''; // We need the tilde for when we build .NET pages

// Resizes images and creates PNG, JPG, and WEBP versions dependent on original format
async function imageShortcode(src, cls, alt, sizes) {
  src = src.startsWith('/') ? src.replace('/', '') : src;
  let fullSrc = `src/site/${src.toLowerCase()}`;

  try {
    fs.accessSync(fullSrc, fs.constants.F_OK);
  } catch (err) {
    console.error(`${fullSrc} not found. Using placeholder`);
    fullSrc = "src/site/images/banners/placeholder.jpg";
  }

  const extension = path.extname(src);
  let formats = extension === '.png' ? ["webp", "png"] : ["webp", "jpeg"];
  let metadata = await Image(fullSrc.toLowerCase(), {
    widths: [400, 600, 800, 1000, 2000],
    formats: formats,
    svgShortCircuit: true,
    urlPath: `${tilde}/${path.dirname(src)}`,
    outputDir: `./dist/${path.dirname(src)}`,
    filenameFormat: function(id, src, width, format, options) {
      const name = path.basename(src, extension);
      return `${name}-${width}.${format}`;
    }
  });

  let imageAttributes = {
    class: cls,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  
  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

// Function that powers the markdownify filter
function markdown(copy) {
  let md = new MarkdownIt();
      
  try {
    return md.render(copy);
  } 
  catch (error) {
    console.log('val: ', copy, ' ', typeof copy);
    return "markdown error";
  }
}

module.exports = function(config) {

  // A useful way to reference to the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'default.njk');

  config.addPlugin(pluginSyntaxHighlight); // see => https://www.11ty.dev/docs/plugins/syntaxhighlight/ (highlights code examples in Documentation and Understanding Coding)
  config.addPlugin(eleventyNavigationPlugin); // see => https://www.11ty.dev/docs/plugins/navigation/ (Only used on Documentation section)
  config.addDataExtension("yaml", contents => yaml.safeLoad(contents)); // see => https://www.11ty.dev/docs/data-custom/ (allows you to use YAML in _data folder)
  config.addNunjucksAsyncShortcode("image", imageShortcode); // see => https://www.11ty.dev/docs/plugins/image/ (responsive images, specifically on the banners)
  
  /* 
    See => https://www.npmjs.com/package/ssri
    Uses this package to generate sub-resource integrity hashes for JS and CSS
  */
  config.addAsyncShortcode("ssri", async function(file) {
    let filePath;  
    
    if(file.endsWith('.css')) {
      filePath = `dist/css/${file}`;
    }
    else if(file.endsWith('.js')) {
      filePath = `dist/js/${file}`;
    }

    try {
      fs.accessSync(filePath, fs.constants.F_OK);

      return await ssri.fromStream(fs.createReadStream(filePath), {
        algorithms: ['sha256']
      }).then(integrity => {
        return integrity.toString();
      });
      
    } catch (err) {
      console.log(`ERROR WITH CSS`);
      return false;
    }
  });

  /*
    Used by banner.njk to convert unit number to ordinal string
  */
  config.addFilter('sessionOrdinal', sessionNo => {
    switch(sessionNo) {
      case 1: return 'first';
      case 2: return 'second';
      case 3: return 'third';
      case 4: return 'fourth';
      case 5: return 'fifth';
      case 6: return 'sixth';
      case 7: return 'seventh';
      case 8: return 'eighth';
      case 9: return 'ninth';
      case 10: return 'tenth';
      default: return '--- undefined ---';
    }
  });
  
  /*
    Used by course-rev.njk
    Takes the pagination.data string and returns an object with the course, unit and session names for the current page
    These names are the folder names in the `_data/courses` folder
  */
  config.addFilter('folders', paginationStr => {
    let objStr = paginationStr; // format = courses['course-name']['unit-name']['session-name']

    // clean up the object
    objStr = objStr.replace("courses", "").replace(/]/g, "").replace(/'/g, ""); // objStr => [course-name[unit-name[session-name

    objStr = objStr.split("["); // array => ['course-name', 'unit-name', 'session-name']

    objStr.reverse().pop(); // remove the empty string created by split()
    objStr = objStr.reverse();

    return {
      course: objStr[0],
      unit: objStr[1],
      session: objStr[2]
    }
  });

  /*
    Uses Node's built-in path module to get file info => https://nodejs.org/api/path.html
    Builds up and returns the <video> tag 
    Looks for local video files as fallback but expects videos to be in Azure Blob Storage
    Addtionally, it looks for captions (.vtt) and transcripts (.md) in the 'src/site/videos' folder and adds these to the page if present
  */
  config.addShortcode('video', (file, id) => {
    let track = '';
    let transcript = '';
    let ext = path.extname(file); // file extension
    let basename = path.basename(file, ext); // filename without extension
    let dirname = `${path.dirname(file)}/`;
    let multi = basename.indexOf('_pc') > 0 ? true : false; // we need to handle instances where there two versions of a video (Mac and PC on IT2)
    let filesToCheck = [basename];
    let vidFilePath = `https://kpcontent.blob.core.windows.net/$web/resources/v2l/720/${file}`;

    // Load the placeholder video if 'placeholder' is set in the YAML file
    if(basename.indexOf('placeholder') !== -1) {
      vidFilePath = 'https://kpcontent.blob.core.windows.net/$web/resources/v2l/720/placeholder.mp4';
      multi = false;
    }

    // Add filename of Mac version of video to the array of files to check
    if(multi) {
      filesToCheck.push(basename.replace('_pc', '_mac'))
    }

    // If there's a VTT for this video, build up the <track> element
    try {
      fs.accessSync(`src/site/videos/captions/vtt/${dirname}${basename}.vtt`, fs.constants.F_OK);

      dirname = dirname === './' ? '' : dirname;

      track = `<track default label="English" kind="captions" srclang="en" src="${tilde}/videos/captions/vtt/${dirname + basename}.vtt">`;
    } catch (err) {
      console.log(`No VTT file for ${dirname + file}`);
    }

    filesToCheck.forEach((file, index) => {
      let type = !multi ? [''] : ['(PC users)', '(Mac users)'];

      // Look for a transcript (.md) file, parse it and convert Markdown to HTML
      try {
        fs.accessSync(`src/site/videos/transcripts/${dirname + file}.md`, fs.constants.F_OK);
        let transcriptContent = fs.readFileSync(`src/site/videos/transcripts/${dirname}${file}.md`, 'utf-8', (err, data) => {
          if (err) throw err;
          return data;
        });

        transcript += `
          <toggle-section open="false">
            <h3>Video transcript ${type[index]}</h3>
            ${markdown(transcriptContent)}
          </toggle-section>
        `;
      } catch (err) {
        console.log(`No transcript for ${dirname + file}`);
      }
    });
    
    // Remote video?
    try {
      fs.accessSync(`src/site/videos/${dirname + file}`, fs.constants.F_OK);
      console.log(`Using local version of ${dirname + file}`);
      vidFilePath = `${tilde}/videos/${dirname + file}`;
    } catch (err) {
    }


    return `
      <div class="l-video-container">
        <video poster="${tilde}/images/svg/poster.svg" controls preload="metadata" aria-labelledby="${id}" width="1000"
          data-base="${basename}" 
          data-ext="${ext}" 
          data-multi="${multi}"
          data-trans="${filesToCheck[0]} ${filesToCheck[1]}">
          <source src="${vidFilePath}" type="video/mp4">
          ${track}
          <p>Sorry, your browser doesn't support embedded videos</p>
        </video>
      </div>
      ${transcript}
      `;
  });

  /* 
    Parse Markdown in YAML files and return HTML
    Usage {{ content | markdownify }}
  */
  config.addFilter("markdownify", value => {
    return markdown(value);
  });

  /*
    Used on the colours documentation page
    Takes HSL values and returns HEX 
    See => https://www.npmjs.com/package/@paulobontempo/hsl-to-hex
  */
  config.addFilter("hexify", value => {
    let hsl = value.replace(/[^0-9^,]+/g, '').split(',');
    return hslToHex(hsl[0], hsl[1], hsl[2]);
  });

  /*
    Course data objects can be returned in random order so we need to sort them
    This is why we prepend 01, 02 to the folder names
  */
  config.addFilter("courseinfo", unit => {
    if(unit) {
      return {
        keysOrdered: Object.keys(unit).sort(),
        size: Object.keys(unit).sort().length
      }
    }
    else {
      console.log("ERROR: Unit passed to 'courseinfo' is undefined")
      return false;
    }
  });

  /*
    Sentence case filter but handles 'IT' so that it doesn't get transformed to 'It'
  */
  config.addFilter("formattitle", value => {
    if(!value) {
      console.log("...Error: ", value);
      return false;
    }
    
    const str = value;
    let iterator; // = str[Symbol.iterator]();
    let formatted = '';

    if(str.startsWith('it')) {
      iterator = str.substring(2)[Symbol.iterator]();
      formatted = 'IT ';
    }
    else {
      formatted = str.substring(0,1).toUpperCase();
      iterator = str.substring(1)[Symbol.iterator]();
    }

    let theChar = iterator.next();
    let newWord = false;

    while (!theChar.done) {
      // console.log(theChar.value);
      let letter = theChar.value;

      if(newWord) {
        letter = letter.toUpperCase();  
      }

      theChar.value === ' ' ? newWord = true : newWord = false;

      formatted = `${formatted}${letter}`
      theChar = iterator.next();
    }
    
    return formatted;
  });

  // Creates a unique value at build time for page elements so there are no conflicts
  config.addFilter("uniqueID", val => {return `${val}_${Math.floor(Math.random(+new Date)*9999999999999)}` });

  // liquid options
  config.setLiquidOptions({
    dynamicPartials: true
  });

  // set deep data merge
  config.setDataDeepMerge(true);

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");
  config.addPassthroughCopy("./src/site/documentation/img");
  config.addPassthroughCopy("./src/site/css/themes");
  // config.addPassthroughCopy("./src/site/captivate");     
  config.addPassthroughCopy("./src/site/documents");
  config.addPassthroughCopy("./src/site/videos");
  config.addPassthroughCopy("./src/site/pdfs");
  config.addPassthroughCopy("./src/site/js");
  config.addPassthroughCopy("./src/site/_redirects");
  config.addPassthroughCopy("./src/site/admin");
  config.addPassthroughCopy("./src/site/resources");

  // make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: "_data",
      layouts: "_layouts"
    },
    templateFormats : ["njk", "liquid", "html", "md", "11ty.js"],
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
