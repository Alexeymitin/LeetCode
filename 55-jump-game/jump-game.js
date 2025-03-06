/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
   let maxReach = 0; // Максимально достижимый индекс

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // Если текущий индекс недостижим, то false
        maxReach = Math.max(maxReach, i + nums[i]); // Обновляем максимальный охват
        if (maxReach >= nums.length - 1) return true; // Достигли конца массива
    }

    return false;
};