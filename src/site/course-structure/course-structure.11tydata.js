module.exports = {
  eleventyComputed: {
    courseData: data => {
      
      let unitMap = new Map(Object.entries(data.courses[data.pagination.items[0]]).sort());
      let sortedMap = new Map();

      for(unit of unitMap.keys()) {
        let sessionMap = new Map(Object.entries(data.courses[data.pagination.items[0]][unit]).sort());
        sortedMap.set(unit, sessionMap);
      }

      return {
        sortedData: sortedMap
      };
    }
  }
};
