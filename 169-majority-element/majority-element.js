/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    if(nums.length === 1) return nums[0]
      
    let k = 0;
    let temp = 0;
    let number = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        
        
        if (nums[i + 1] === nums[i]) {
            temp++;
            
        } else {
            if (temp > k) {
                k = temp;
                number = nums[i]
            }
            temp = 0;
        }

        
    }

    

    return number
};