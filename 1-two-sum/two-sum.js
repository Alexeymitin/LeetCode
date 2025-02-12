/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); // Хеш-таблица для хранения чисел и их индексов

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Вычисляем, какое число нужно найти
        
        // Если дополнение уже есть в хеш-таблице, возвращаем индексы
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Иначе, добавляем текущее число и его индекс в хеш-таблицу
        map.set(nums[i], i);
    }
};