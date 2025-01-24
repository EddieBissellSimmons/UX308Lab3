import { convertMetersToYards } from "../convertMetersToYards.js";

describe("test convertMetersToYards", function() {
    it("tests 25 kilometers", function() {
        let meters = 25;
        let yards = convertMetersToYards(meters);
        expect(yards.toFixed(2)).toBe("27.34");
    });
    it("tests 5 meters", function() {
        let meters = 5;
        let yards = convertMetersToYards(meters);
        expect(yards.toFixed(2)).toBe("5.47");
       });
  });