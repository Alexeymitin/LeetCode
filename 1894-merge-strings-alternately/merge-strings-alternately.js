/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let p1 = 0;
    let p2 = 0;
    let mergedString = ""

    while (p1 < word1.length && p2 < word2.length) {
        mergedString += word1[p1] + word2[p2];
        p1++
        p2++
    }


    while (p2 < word2.length) {
        mergedString += word2[p2]
        p2++
    }

     while (p1 < word1.length) {
        mergedString += word1[p1]
        p1++
    }

    return mergedString;
};     