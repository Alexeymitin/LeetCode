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
var countNodes = function(root) {
    if (!root) return 0;

    const stack = [root];
    let counter = 0;

    while (stack.length > 0) {
        let node = stack.pop();

        if (node) {
            counter ++;
        }

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return counter;
};