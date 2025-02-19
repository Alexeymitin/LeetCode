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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false; // Пустое дерево

    let stack = [[root, targetSum - root.val]]; // Стек: [узел, оставшаяся сумма]

    while (stack.length > 0) {
        let [node, remainingSum] = stack.pop(); // Достаем последний узел

        // Если это лист и сумма пути совпадает
        if (!node.left && !node.right && remainingSum === 0) {
            return true;
        }

        // Добавляем потомков в стек с обновленной суммой пути
        if (node.right) stack.push([node.right, remainingSum - node.right.val]);
        if (node.left) stack.push([node.left, remainingSum - node.left.val]);
    }

    return false; // Пути не нашли
};