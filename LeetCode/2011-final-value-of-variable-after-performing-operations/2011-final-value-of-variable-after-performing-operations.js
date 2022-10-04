/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  return operations.reduce((acc, cur) => {
    return cur.includes("+") ? ++acc : --acc;    
  }, 0);
};