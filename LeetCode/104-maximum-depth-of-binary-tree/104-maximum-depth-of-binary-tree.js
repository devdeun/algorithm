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
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    const getMaxDepth = (root, depth) => {
        if (!root) return;
        if (depth > max) max = depth;
        
        getMaxDepth(root.left, depth + 1);
        getMaxDepth(root.right, depth + 1);
    }
    getMaxDepth(root, 1);
    return max;
};