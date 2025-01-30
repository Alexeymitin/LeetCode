/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let normalizeString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let start = 0;
  let end = normalizeString.length - 1

  while (start < end) {
    if (normalizeString[start] === normalizeString[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};