var duration = require("../../src/duration.js");

describe("duration", function() {
    it(".get() returns 5", function() {
        expect(duration.get()).toBe(5);
    })
});
