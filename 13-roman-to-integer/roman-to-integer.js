/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let number = 0;

    for (let i = 0; i < s.length; i++) {
      if (i + 1 < s.length && dict[s[i]] < dict[s[i + 1]]) {
        number -= dict[s[i]];
      } else {
        number += dict[s[i]];
      }         
    }

    return number;
};