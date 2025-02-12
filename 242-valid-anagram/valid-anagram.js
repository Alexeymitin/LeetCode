/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const dict = new Map();

    for (let i = 0; i < s.length; i++) {
        dict.set(s[i], (dict.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (dict.get(t[i])) {
            dict.set(t[i], dict.get(t[i]) - 1);
        } else {
            return false;
        }
    }

  return true;
};