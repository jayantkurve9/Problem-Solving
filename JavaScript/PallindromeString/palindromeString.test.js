const palindromeString = require("./palindromeString");

describe("Test to check whether string is palindrome or not", () => {
  test("should return true for palindrome string", () => {
    const actualString = "aabbcbbaa";
    const result = palindromeString(actualString);
    expect(result).toBeTruthy();
  });

  test("should return false for non palindrome string", () => {
    const actualString = "aabacaa";
    const result = palindromeString(actualString);
    expect(result).toBeFalsy();
  });
});
