/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const totalValue = [];
    const count = [];
    let level = 0;
    const getTotalValue = (root, level) => {
        if (!root) return;
        totalValue[level] = totalValue[level] ? totalValue[level] + root.val : root.val;
        count[level] = count[level] ? count[level] + 1 : 1;
        getTotalValue(root.left, level + 1);
        getTotalValue(root.right, level + 1);
    }
    
    getTotalValue(root, 0);
    return totalValue.map((value, index) => value / count[index]);
};