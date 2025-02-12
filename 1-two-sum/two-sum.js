/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 let pointer = 1
 for (let i = 0; i < nums.length; i++) {
    for (let j = pointer; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
    pointer++
  }
};