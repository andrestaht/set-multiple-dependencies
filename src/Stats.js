var count = require("count.js");
var duration = require("duration.js");

module.exports = class Stats {
    getCount() {
        return count.get();
    }

    getDuration() {
        return duration.get();
    }
};
