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
    if (!root) return [];

    const queue = [root];  // Начинаем с корня дерева
    const result = [];

    while (queue.length > 0) {
        let levelSum = 0;  // Сумма значений узлов на текущем уровне
        let levelCount = queue.length;  // Количество узлов на текущем уровне

        for (let i = 0; i < levelCount; i++) {
            const node = queue.shift();  // Извлекаем узел из очереди
            levelSum += node.val;  // Добавляем значение узла к сумме

            // Добавляем детей в очередь для следующего уровня
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Добавляем среднее значение уровня в результат
        result.push(levelSum / levelCount);
    }

    return result;
};
