/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Переменная для произведения слева
    let left = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= left;  // Умножаем на произведение слева
        left *= nums[i];     // Обновляем произведение слева
    }

    // Переменная для произведения справа
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;  // Умножаем на произведение справа
        right *= nums[i];     // Обновляем произведение справа
    }

    return result;
};