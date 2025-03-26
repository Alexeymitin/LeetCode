/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = [];  // Массив для хранения результата

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        result.push(left);  // Добавляем произведение слева
        left *= nums[i];    // Обновляем произведение слева
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;  // Умножаем на произведение справа
        right *= nums[i];     // Обновляем произведение справа
    }

    return result;
};