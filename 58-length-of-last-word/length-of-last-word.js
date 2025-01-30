/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {  // Если нашли букву, увеличиваем счётчик длины
            length++;
        } else if (length > 0) {  
            // Если встретили пробел ПОСЛЕ слова — значит, слово закончилось
            break;
        }
    }

    return length;
};