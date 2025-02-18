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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;

    let queue = [root.left, root.right];
    let left = 0;
    let right = 0;

    while (queue.length > 0) {
        let left = queue.shift();  // Извлекаем первый элемент
        let right = queue.shift();

        if (!left && !right) continue;  // Если оба пусты — продолжаем
        if (!left || !right) return false;  // Если одно пустое, а другое нет — не симметричны

 
        // Если значения не равны, возвращаем false
        if (left.val !== right.val) return false;

        // Добавляем в очередь детей (проверяем зеркальную симметричность)
        queue.push(left.left, right.right);  // Левое поддерево с правым
        queue.push(left.right, right.left);  // Правое поддерево с левым
    }

    return true;
};