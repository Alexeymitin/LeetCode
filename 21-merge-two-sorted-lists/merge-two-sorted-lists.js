/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); // Временный узел
    let tail = dummy; // Указатель на конец нового списка

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;  // Добавляем узел из list1
            list1 = list1.next; // Сдвигаем указатель list1
        } else {
            tail.next = list2;  // Добавляем узел из list2
            list2 = list2.next; // Сдвигаем указатель list2
        }
        tail = tail.next; // Сдвигаем tail вперёд
    }

    // Если остались элементы в одном из списков — добавляем их
    if (list1 !== null) {
        tail.next = list1;
    } else {
        tail.next = list2;
    }

    return dummy.next; // Возвращаем голову нового списка
};
