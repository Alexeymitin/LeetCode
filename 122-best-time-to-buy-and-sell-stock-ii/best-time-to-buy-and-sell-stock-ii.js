/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let p1 = 0;
  

    while (p1 < prices.length) {
        if (prices[p1 + 1] - prices[p1] > 0) {
            maxProfit = prices[p1 + 1] - prices[p1] + maxProfit
           
        } 
        
       p1++
    }

    return maxProfit;
};