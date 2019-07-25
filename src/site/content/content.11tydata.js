module.exports = function() {
  let layout = (process.env.ELEVENTY_ENV === 'dev') ? 'course-sections' : 'course-stub';

  return {
    "date": "2019-01-01",
    "layout": "layouts/" + layout
  }
};