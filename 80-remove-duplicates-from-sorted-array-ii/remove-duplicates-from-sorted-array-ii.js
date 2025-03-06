/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0; // Медленный указатель

    for (let num of nums) {
        // Если `slow < 2`, значит, первые два элемента всегда оставляем.
        // Если `nums[slow - 2] !== num`, значит, элемент можно добавить.
        if (slow < 2 || nums[slow - 2] !== num) {
            nums[slow] = num;
            slow++;
        }
    }

    return slow; // Количество оставшихся элементов
};