/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let candidate = null;
    let count = 0;

    // Первый проход по массиву для нахождения кандидата
    for (let num of nums) {
        if (count === 0) {
            candidate = num;  // Устанавливаем нового кандидата
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};