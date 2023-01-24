/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastIndex = digits.length - 1;
    if (digits[lastIndex] !== 9) digits[lastIndex]++;
    else {    
        while (digits[lastIndex] === 9) {
            digits[lastIndex] = 0;
            lastIndex--;    
        }
        if (digits[lastIndex] === undefined) digits.unshift(1);
        else digits[lastIndex]++;
    }
    return digits;
};