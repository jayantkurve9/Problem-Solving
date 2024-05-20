const permutationArray = require("./permutationArray");

describe("Test to check correct permutation pairs of given array", () => {
    test("should return 4 permuation pairs of array", () => {
        const testArray = [1, 2];
        const actualResult = [
            [1, 2],
            [2, 1],
        ];
        const testResult = permutationArray(testArray);
        expect(testResult).toStrictEqual(actualResult);
    });

    test("should return 9 permutation pairs of array", () => {
        const testArray = [1, 2, 3];
        const actualResult = [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ];
        const testResult = permutationArray(testArray);
        expect(testResult).toStrictEqual(actualResult);
    });
});
