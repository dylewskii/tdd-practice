import analyzeArray from "../analyzeArray";

describe("analyzeArray", () => {
    test("returns correct analysis for an array of numbers", () => {
        const inputArray = [3, 7, 1, 9, 5];
        const result = analyzeArray(inputArray);
        expect(result).toEqual({
            average: 5,
            min: 1,
            max: 9,
            length: 5,
        })
    })
});