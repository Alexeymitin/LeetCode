/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0); // Временный узел
    let tail = dummy; // Указатель на конец нового списка
    let carry = 0; // Перенос

    // Пока хотя бы один из списков не пуст или есть перенос
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Получаем значения для текущих узлов, если они существуют
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // Суммируем значения с учетом переноса
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Рассчитываем новый перенос
        let digit = sum % 10; // Остаток от деления — это текущая цифра

        // Создаем новый узел и добавляем его в список
        tail.next = new ListNode(digit);
        tail = tail.next; // Сдвигаем tail

        // Двигаем указатели по спискам (если они не пусты)
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummy.next; // Возвращаем новый список, начиная с первого узла
};