/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const objPatterns = new Map();
  const objS = new Map();
  const arrS = s.split(" ");

  if (pattern.length !== arrS.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = arrS[i];

    if (!objPatterns.has(p) && !objS.has(word)) {
      objPatterns.set(p, word);
      objS.set(word, p);
    } else {
      if (objPatterns.get(p) !== word || objS.get(word) !== p) {
        return false;
      }
    }
  }

  return true;
};
