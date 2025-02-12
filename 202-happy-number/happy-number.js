/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const seen = new Set(); // Множество для хранения уже встреченных чисел

  while (n !== 1) {
    if (seen.has(n)) {
      return false; // Если число уже встречалось, значит, попали в цикл
    }

    seen.add(n); // Добавляем текущее число в множество

    // Вычисляем сумму квадратов цифр
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }

    n = sum; // Заменяем n на новую сумму квадратов цифр
  }

  return true; // Если цикл завершился, значит n стало равным 1
};