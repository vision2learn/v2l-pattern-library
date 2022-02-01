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

let tilde = process.env.ELEVENTY_ENV === 'dotnet' ? '~' : '';
let missingCaptions = [];
let missingTranscripts = [];

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

function logMissing(files) {
  files.forEach(file => {
    console.log('No VTT for: ', file);
  });
}

module.exports = function(config) {

  // A useful way to reference to the contect we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  config.addPlugin(pluginSyntaxHighlight);
  config.addDataExtension("yaml", contents => yaml.safeLoad(contents));
  config.addPlugin(eleventyNavigationPlugin);
  config.addNunjucksAsyncShortcode("image", imageShortcode);
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

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'default.liquid');

  config.addFilter('folders', paginationStr => {
    let objStr = paginationStr;

    // clean up the object
    objStr = objStr.replace("courses", "").replace(/]/g, "").replace(/'/g, "");

    objStr = objStr.split("[");

    objStr.reverse().pop(); // remove the empty string created by split()
    objStr = objStr.reverse();

    return {
      course: objStr[0],
      unit: objStr[1],
      session: objStr[2]
    }
  });

  config.addShortcode('video', (file, id) => {
    let ext = path.extname(file);
    let basename = path.basename(file, ext);
    let dirname = `${path.dirname(file)}/`;
    let track = '';
    let transcript = '';
    let multi = basename.indexOf('_pc') > 0 ? true : false;
    let filesToCheck = [basename];
    let vidFilePath = `https://kpcontent.blob.core.windows.net/$web/resources/v2l/720/${file}`;

    if(basename.indexOf('placeholder') !== -1) {
      vidFilePath = 'https://kpcontent.blob.core.windows.net/$web/resources/v2l/720/placeholder.mp4';
      multi = false;
    }

    if(multi) {
      filesToCheck.push(basename.replace('_pc', '_mac'))
    }

    // Is there a VTT for this video?
    try {
      fs.accessSync(`src/site/videos/captions/vtt/${dirname}${basename}.vtt`, fs.constants.F_OK);
      track = `<track default label="English" kind="captions" srclang="en" src="${tilde}/videos/captions/vtt/${dirname + basename}.vtt">`;
    } catch (err) {
      console.log(`No VTT file for ${dirname + file}`);
      missingCaptions.push(file);
    }

    filesToCheck.forEach((file, index) => {
      let type = !multi ? [''] : ['(PC users)', '(Mac users)'];

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
        missingTranscripts.push(file)      
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

  config.addFilter("markdownify", value => {
    return markdown(value);
  });

  config.addFilter("yamlify", value => {
    return json2yaml.stringify(value);
  });

  config.addFilter("hexify", value => {
    let hsl = value.replace(/[^0-9^,]+/g, '').split(',');
    return hslToHex(hsl[0], hsl[1], hsl[2]);
  });

  
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

  // Pass in an object, return the keys?
  config.addFilter("keys", obj => {
    return Object.keys(obj);
  });

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

  config.addFilter("trimit", function(value, start, end) {
    start = start ? start : 0;

    if(!end) {
      return value.slice(start);
    }
    else {
      return value.slice(start, end);
    }
  });

  config.addFilter("uniqueID", val => {return `${val}_${Math.floor(Math.random(+new Date)*9999999999999)}` });

  // Add some utiliuty filters
  config.addFilter("squash", require("./src/filters/squash.js") );
  config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat(format);
  });

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
  config.addPassthroughCopy("./src/site/captivate");     
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
