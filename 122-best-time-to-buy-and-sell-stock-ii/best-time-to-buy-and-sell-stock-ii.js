/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    let p1 = 0;
    let p2 = 1;

    while (p1 < prices.length) {
        
        if (prices[p2] - prices[p1] > 0) {
            maxProfit = prices[p2] - prices[p1] + maxProfit
            p1++
            p2++
        } else {
            p1++
            p2++
        }
      
    }

    return maxProfit;
};