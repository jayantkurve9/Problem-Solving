const twoSum = require("../TwoSum/twoSum");

describe("Test two sum", () => {
    test("Should return two numbers in an array that are equal to target", () => {
        const actualArray = [4, 3, 2, 7, 1, 4];
        const target = 4;
        const expectedResult = [3, 1];
        const result = twoSum(actualArray, target);
        expect(result).toStrictEqual(expectedResult);
    });

    test("Should return two numbers in an array that are equal to target for different variation", () => {
        const actualArray = [2, 1, 3, 7, 6, 9];
        const target = 9;
        const expectedResult = [2, 7];
        const result = twoSum(actualArray, target);
        expect(result).toStrictEqual(expectedResult);
    });

    test("Should return empty array if no numbers equal to target", () => {
        const actualArray = [8, 2, 5, 1, 9, 2];
        const target = 5;
        const expectedResult = [];
        const result = twoSum(actualArray, target);
        expect(result.length).toStrictEqual(0);
    });
});
