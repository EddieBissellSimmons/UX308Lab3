import { suggestClothing } from "../suggestClothing.js";

describe("test suggestClothing", function() {
    it("tests humidity >60 and temperature >4", function() {
        let humidity = 100;
        let temp = 20;
        let clothing = suggestClothing(humidity, temp)
        expect(clothing).toBe("rain jacket");
    });
  });