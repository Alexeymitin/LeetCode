/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    let lastWord = ""
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            lastWord = arr[i];
        }
    }

    return lastWord.length;
};