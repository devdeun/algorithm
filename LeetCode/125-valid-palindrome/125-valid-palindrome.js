/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const palindrome = s.replace(/[^A-Z|^0-9]/gi, "").toLowerCase();
    const length = palindrome.length;
    for (let i = 0; i < length / 2; i++) {
        if (palindrome[i] !== palindrome[length - 1 - i]) return false;
    }
    return true;
};