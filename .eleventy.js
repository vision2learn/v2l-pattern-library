const { DateTime } = require("luxon");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");
const json2yaml = require('json-to-pretty-yaml');
const hslToHex = require('@paulobontempo/hsl-to-hex');
const Image = require('@11ty/eleventy-img');
const path = require("path");

async function imageShortcode(src, cls, alt, sizes) {
  console.log(src);
  let fullSrc = `src/site/${src}`;
  let metadata = await Image(fullSrc, {
    widths: [400, 600, 800, 1000, 2000],
    formats: ["webp", "jpeg"],
    svgShortCircuit: true,
    urlPath: `/${path.dirname(src)}`,
    outputDir: `./dist/${path.dirname(src)}`,
    filenameFormat: function(id, src, width, format, options) {
      const extension = path.extname(src);
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

module.exports = function(config) {

  // A useful way to reference to the contect we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  config.addPlugin(pluginSyntaxHighlight);
  config.addDataExtension("yaml", contents => yaml.safeLoad(contents));
  config.addPlugin(eleventyNavigationPlugin);
  config.addNunjucksAsyncShortcode("image", imageShortcode);

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'default.liquid');

  config.addFilter("markdownify", function(value) {
    var MarkdownIt = require('markdown-it'),
      md = new MarkdownIt();
      
      try {
        return md.render(value);
      } 
      catch (error) {
        console.log('val: ', value, ' ', typeof value);
        return "markdown error";
      }
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

  config.addFilter("uniqueID", val => {return `${val}_${+new Date()}` });

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
