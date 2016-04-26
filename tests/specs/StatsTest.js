var Stats = require("../../src/Stats.js");

describe("Stats", function() {
    beforeEach(function() {
        this.stats = new Stats();
    });

    it(".getCount() returns 1", function() {
        expect(this.stats.getCount()).toBe(1);
    });

    it(".getDuration() returns 5", function() {
        expect(this.stats.getDuration()).toBe(5);
    });
});

describe("Stats with setting each dependency with separate __set__ call", function() {
    beforeEach(function() {
        Stats.__set__("count", {
            get: function() {
                return 15;
            }
        });

        Stats.__set__("duration", {
            get: function() {
                return 17;
            }
        });

        this.stats = new Stats();
    });

    afterEach(function() {
        Stats.__ResetDependency__("count");
        Stats.__ResetDependency__("duration");
    });

    it(".getCount() returns 15", function() {
        expect(this.stats.getCount()).toBe(15);
    });

    it(".getDuration() returns 17", function() {
        expect(this.stats.getDuration()).toBe(17);
    });
});

describe("Stats with setting all dependencies with one __set__ call", function() {
    beforeEach(function() {
        Stats.__set__({
            count: {
                get: function() {
                    return 2;
                }
            },
            duration: {
                get: function() {
                    return 3;
                }
            }
        });

        this.stats = new Stats();
    });

    afterEach(function() {
        Stats.__ResetDependency__("count");
        Stats.__ResetDependency__("duration");
    });

    it(".getCount() returns 2", function() {
        expect(this.stats.getCount()).toBe(2);
    });

    it(".getDuration() returns 3", function() {
        expect(this.stats.getDuration()).toBe(3);
    });
});
