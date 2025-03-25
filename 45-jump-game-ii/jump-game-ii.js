/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;         // Количество прыжков
    let currentEnd = 0;    // Граница текущего прыжка
    let farthest = 0;      // Самая дальняя достижимая точка

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]); // Обновляем дальность

        if (i === currentEnd) { // Если достигли границы текущего прыжка
            jumps++;            // Делаем прыжок
            currentEnd = farthest; // Обновляем границу

            if (currentEnd >= nums.length - 1) break; // Если дошли до конца, выходим
        }
    }

    return jumps;
};