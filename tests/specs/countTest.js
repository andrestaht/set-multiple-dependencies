var count = require("../../src/count.js");

describe("count", function() {
    it(".get() returns 1", function() {
        expect(count.get()).toBe(1);
    })
});
