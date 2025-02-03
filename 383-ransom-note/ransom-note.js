/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
const letterCount = {};

    // Подсчитаем количество каждого символа в строке magazine
    for (let letter of magazine) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    // Проверим, можем ли мы составить ransomNote из символов magazine
    for (let letter of ransomNote) {
        if (!letterCount[letter]) {
            return false;  // Если символ в ransomNote больше не доступен в magazine, вернем false
        }
        letterCount[letter] -= 1;  // Используем один символ из magazine
    }

    return true;  // Все символы ransomNote были найдены в magazine
};