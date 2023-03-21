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
var preorderTraversal = function(root) {
    const stack = [];
    const pushValue = (root) => {
        if (!root) return;
        stack.push(root.val);
        pushValue(root.left);
        pushValue(root.right);
    }
    pushValue(root);
    return stack;
};