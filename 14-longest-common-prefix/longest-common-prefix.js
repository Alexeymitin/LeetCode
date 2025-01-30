/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let maxLength = 0;

    if (strs.includes("")) {
        return prefix;
    }

    for (let i = 0; i < strs.length; i++) {     
        if (strs[i].length > maxLength) {
          maxLength = strs[i].length
        }
    }

    for (let i = 0; i < maxLength; i++) {     
        for (let j = 0; j < strs.length; j++) {
          
            if (strs[j + 1] && (strs[j + 1][i] !== strs[j][i])) {
                return prefix;
            } 

            if (j === strs.length - 1) {
                prefix += strs[j][i]
            }
        }
    }

    return prefix;
};