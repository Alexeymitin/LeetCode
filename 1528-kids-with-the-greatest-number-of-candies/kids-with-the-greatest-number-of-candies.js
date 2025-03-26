/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies);  // Находим максимальное число конфет
    return candies.map(candy => candy + extraCandies >= maxCandy);
};