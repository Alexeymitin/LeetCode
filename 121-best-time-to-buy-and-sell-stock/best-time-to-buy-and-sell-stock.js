/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let day = 1;
    let minPrice = prices[0]
    let maxProfit = 0;

    while (day < prices.length) {      
        let profit = (prices[day] - minPrice) <= 0 ? 0 : prices[day] - minPrice;

        if (prices[day] < minPrice) {
          minPrice = prices[day];
        }

        if (profit > maxProfit) {
          maxProfit = profit;
          
        }

       day++
    }

    return maxProfit;
};