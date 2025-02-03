/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let mapS = {};
  let mapT = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // Если символ из s уже был сопоставлен с другим символом из t, возвращаем false
    if (mapS[charS] && mapS[charS] !== charT) {
      return false;
    }
    // Если символ из t уже был сопоставлен с другим символом из s, возвращаем false
    if (mapT[charT] && mapT[charT] !== charS) {
      return false;
    }

    // Добавляем сопоставления в объекты
    mapS[charS] = charT;
    mapT[charT] = charS;
  }

  return true;
};