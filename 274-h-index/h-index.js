/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a); // Сортируем по убыванию (O(n log n))

    let h = 0;
    for (let i = 0; i < citations.length; i++) { // O(n)
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }

    return h;
};