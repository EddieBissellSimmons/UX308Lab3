import { convertKilometersToMiles } from "../convertKilometersToMiles.js";

describe("test convertKilometersToMiles", function() {
    it("tests 150 kilometers", function() {
        let kilometers = 150;
        let miles = convertKilometersToMiles(kilometers);
        expect(miles.toFixed(2)).toBe("93.23");
    });
    it("tests 70 kilometers", function() {
        let kilometers = 70;
        let miles = convertKilometersToMiles(kilometers);
        expect(miles.toFixed(2)).toBe("43.51");
       });
  });