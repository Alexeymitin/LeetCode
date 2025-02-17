/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const duplicateIndexs = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (duplicateIndexs.has(nums[i])) {
      const indices = duplicateIndexs.get(nums[i]);
      indices.push(i);
      duplicateIndexs.set(nums[i], indices);

      if (duplicateIndexs.get(nums[i]).length > 1) {
        const indices = duplicateIndexs.get(nums[i]);

        for (let j = 0; j < indices.length - 1; j++) {
          if (Math.abs(indices[j] - indices[j + 1]) <= k) {
            return true;
          }
        }
      }
    } else {
      duplicateIndexs.set(nums[i], [i]);
    }
  }

  return false;
};