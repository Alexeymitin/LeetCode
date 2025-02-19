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

    const queue = [[root, 0]];
    const answer = [];
    let maxLevel = 0;
    let sum = 0;
    let countOfNode = 0

    while (queue.length > 0) {
        const [node, level] = queue.shift();
       // Math.floor((num / 2)* 100000) / 100000
        if (level === maxLevel) {
            sum += node.val;
            countOfNode++
        } else {
            answer.push(sum / countOfNode);
            sum = node.val;
            countOfNode = 1;
            maxLevel++
        }

        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }

    answer.push(sum / countOfNode);

    return answer;
};