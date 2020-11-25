module.exports = {
    "title": "Vision2Learn Pattern Library",
    "v2l": "vision&#x200B;2&#x200B;learn",
    "srcset": [
        400,
        600,
        800,
        1000,
        2000
    ],
    "env": process.env.ELEVENTY_ENV,
    "tttSummary": false,
    "date": function() {
        const date = new Date(Date.now());
        return {
            year: date.getFullYear(),
            build: date.toString()
        }
    }
}