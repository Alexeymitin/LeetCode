/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next; // Запоминаем следующий узел
        current.next = prev; // Разворачиваем ссылку
        prev = current; // Сдвигаем prev
        current = nextNode; // Сдвигаем current
    }

    return prev; // Новый head (бывший tail)
};