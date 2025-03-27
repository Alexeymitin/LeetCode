 /**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 && 
            (i === 0 || flowerbed[i - 1] === 0) && 
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;  // Сажаем цветок
            count++;  // Увеличиваем счётчик посаженных цветов
        }

        if (count >= n) return true;  // Достаточно цветов – можно завершать
    }
    
    return count >= n;
};