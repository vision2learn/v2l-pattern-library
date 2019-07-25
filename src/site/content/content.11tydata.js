module.exports = function() {
  let layout = (process.env.ELEVENTY_ENV === 'dotnet') ? 'course-stub' : 'course-sections';

  return {
    "date": "2019-01-01",
    "layout": "layouts/" + layout
  }
};