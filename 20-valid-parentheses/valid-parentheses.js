/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // Открывающая скобка -> в стек
        } else if (map[char]) { // Если это закрывающая
            if (stack.pop() !== map[char]) return false; // Проверяем соответствие
        }
    }

    return stack.length === 0;
};