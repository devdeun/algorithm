/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const type = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    s.split("").forEach(bracket => {
        if (type[bracket] && type[bracket] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(bracket);
        };
    });
    return stack.length ? false : true;
};