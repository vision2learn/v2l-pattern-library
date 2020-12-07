module.exports = function() {
  // let layout = (process.env.ELEVENTY_ENV === 'dotnet') ? 'course-stub' : 'course2';

  return {
    date: "2019-01-01",
    buildenv: process.env.ELEVENTY_ENV,
    layout: "course2"
  }
};
