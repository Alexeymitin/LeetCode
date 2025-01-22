/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const len1 = str1.length;
    const len2 = str2.length;
    const gcdLength = gcd(len1, len2);

    const candidate = str1.substring(0, gcdLength);
    
    if (str1 + str2 === str2 + str1) {
        return candidate;
    }

    return "";
};