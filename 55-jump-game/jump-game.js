/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let left = 0;       // Текущий индекс (указатель)
    let farthest = 0;   // Самая дальняя достижимая позиция

    while (left <= farthest) {
        farthest = Math.max(farthest, left + nums[left]); // Обновляем дальность
        if (farthest >= nums.length - 1) return true; // Дошли до конца?
        left++; // Двигаем указатель вправо
    }

    return false; // Если вышли из цикла, значит застряли
};