/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts.reduce((acc, cur) => {
    const sum = cur.reduce((acc, cur) => acc + cur, 0);
    return Math.max(acc, sum);
  }, 0);
};
