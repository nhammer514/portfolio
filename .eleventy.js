module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("_src/_includes/");
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addPassthroughCopy("./_src/images/");
    eleventyConfig.addPassthroughCopy("./_src/scripts/");
    eleventyConfig.addPassthroughCopy("./_src/files/");

    const svgContents = require("eleventy-plugin-svg-contents");
    eleventyConfig.addPlugin(svgContents);
    return{
        dir: {
            input: "_src",
            output: "_site"
        },
      };
};
