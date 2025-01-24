import { cubeVolume } from "../cubeVolume.js";

describe("test cubeVolume", function() {
    it("tests 25 kilometers", function() {
        let length = 5;
        let volume = cubeVolume(length);
        expect(volume.toFixed(2)).toBe("125.00");
    });
  });