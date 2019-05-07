const { DateTime } = require("luxon");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(config) {

  // A useful way to reference to the contect we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  config.addPlugin(pluginSyntaxHighlight);

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/default.liquid');

  config.addFilter("markdownify", function(value) {
    var MarkdownIt = require('markdown-it'),
      md = new MarkdownIt();
    return md.render(value);
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