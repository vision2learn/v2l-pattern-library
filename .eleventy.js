const { DateTime } = require("luxon");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
let Nunjucks = require("nunjucks");
module.exports = function(config) {

  // A useful way to reference to the contect we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  let njkEnv = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/site/_includes", {noCache: true})
  );

  config.setLibrary("njk", njkEnv);

  config.addPlugin(pluginSyntaxHighlight);

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/default.liquid');

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

  config.addFilter("trimit", function(value, start, end) {
    start = start ? start : 0;

    if(!end) {
      return value.slice(start);
    }
    else {
      return value.slice(start, end);
    }
  });

  config.addFilter("logit", function(obj){
    console.log(obj);
  });

  njkEnv.addGlobal('getContext', function(obj, fn) { 
    if(typeof obj[fn] === 'function') {
      return obj[fn];
    }
    
    return false;
  });

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
  config.addPassthroughCopy("./src/site/css/themes");
  config.addPassthroughCopy("./src/site/captivate");
  config.addPassthroughCopy("./src/site/documents");
  config.addPassthroughCopy("./src/site/videos");
  config.addPassthroughCopy("./src/site/pdfs");
  config.addPassthroughCopy("./src/site/server.cert");
  config.addPassthroughCopy("./src/site/server.key");
  // config.addPassthroughCopy("./src/site/js/interactive");

  // make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: "_data"
    },
    templateFormats : ["njk", "liquid", "html", "md"],
    dataTemplateEngine: "njk",
    // htmlTemplateEngine : "njk",
    // markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };
};