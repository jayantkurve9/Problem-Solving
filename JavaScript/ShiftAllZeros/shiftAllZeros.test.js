const shiftAllZeros = require("./shiftAllZeros");

describe("Test remove all zeros to end", () => {
    test("should append all zeros at end", () => {
        const actualArray = [2, 0, 4, 5, 0, 6, 0];
        const expectedResult = [2, 4, 5, 6, 0, 0, 0];
        const result = shiftAllZeros(actualArray);

        expect(result).toStrictEqual(expectedResult);
    });

    test("should append all zeros at end, if two adjacent zeros provided", () => {
        const actualArray = [0, 0, 4, 0, 0, 0];
        const expectedResult = [4, 0, 0, 0, 0, 0];
        const result = shiftAllZeros(actualArray);

        expect(result).toStrictEqual(expectedResult);
    });
});
