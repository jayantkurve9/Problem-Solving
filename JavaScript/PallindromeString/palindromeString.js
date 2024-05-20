/*
Approach: Two Pointer 
* Two pointers 'start' and 'end' are iterating on string from starting and ending.
* Checking if characters at both the index matches and if not returning false.
* Incrementing start by 1 and decreasing end by 1 to move pointers towards center.
* If all the characters at start and end indexes are identical then string is palindrome and returning true.
*/
const palindromeString = (string) => {
  let start = 0;
  let end = string.length - 1;

  while (start <= end) {
    if (string.charAt(start) !== string.charAt(end)) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

module.exports = palindromeString;
