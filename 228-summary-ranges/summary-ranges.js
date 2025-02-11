/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = nums[0];
    let end = nums[0];
    let intervals =[];
    let intervalsStrings = []

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - end === 1) {
            end = nums[i];
        } else {
            intervals.push([start, end]);
            start = nums[i];
            end = nums[i]
        }
    }

    intervals.forEach((interval) => {
         if(interval[0] === interval[1]) {
            intervalsStrings.push(`${interval[1]}`);
       } else {
            intervalsStrings.push(`${interval[0]}->${interval[1]}`);
       }
    })

    // for (let i = 0; i < nums.length; i++) {
    //    if(intervals[i][0] === intervals[i][1]) {
    //         intervalsStrings.push(`${intervals[i][1]}`);
    //    } else {
    //         intervalsStrings.push(`${intervals[i][0]}->${intervals[i][1]}`);
    //    }
    // }

    return intervalsStrings;
};