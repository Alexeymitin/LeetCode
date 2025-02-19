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

    let count = 0;
    
    while (root) {
        let leftDepth = getDepth(root.left);
        let rightDepth = getDepth(root.right);

        if (leftDepth === rightDepth) {
            // Левое поддерево полное → считаем узлы и идем в правое
            count += (1 << leftDepth);
            root = root.right;
        } else {
            // Правое поддерево полное → считаем узлы и идем в левое
            count += (1 << rightDepth);
            root = root.left;
        }
    }
    
    return count;
};

// Функция вычисления глубины (идем по левым узлам)
function getDepth(node) {
    let depth = 0;
    while (node) {
        depth++;
        node = node.left;
    }
    return depth;
}