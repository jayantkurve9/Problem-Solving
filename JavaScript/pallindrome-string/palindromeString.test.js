const palindromeString = require("./palindromeString");

describe("Test to check whether string is palindrome or not", () => {
  test("should return true for palindrome string", () => {
    const testString = "aabbcbbaa";
    const result = palindromeString(testString);
    expect(result).toBeTruthy();
  });

  test("should return false for non palindrome string", () => {
    const testString = "aabacaa";
    const result = palindromeString(testString);
    expect(result).toBeFalsy();
  });
});
