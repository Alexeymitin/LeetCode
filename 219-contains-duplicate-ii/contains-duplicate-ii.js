/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const indexMap = new Map(); // Храним последнее вхождение каждого числа

    for (let i = 0; i < nums.length; i++) {
        if (indexMap.has(nums[i]) && i - indexMap.get(nums[i]) <= k) {
            return true; // Если условие выполняется, сразу возвращаем true
        }
        indexMap.set(nums[i], i); // Обновляем индекс последнего вхождения
    }

    return false; // Если ни разу не вернули true, значит, дубликатов в пределах k нет
};
