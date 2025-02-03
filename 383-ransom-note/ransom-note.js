/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const magazineMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (!magazineMap.has(magazine[i])) {
      magazineMap.set(magazine[i], 1);
    } else {
      magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1);
    }
  }

  console.log(magazineMap);

  for (let i = 0; i < ransomNote.length; i++) {
    console.log(magazineMap);
    if (!magazineMap.has(ransomNote[i])) return false;

    magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1);

    if (magazineMap.get(ransomNote[i]) === 0) {
      magazineMap.delete(ransomNote[i]);
    }
  }

  return true;
};