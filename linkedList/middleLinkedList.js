/*
Source: leetcode's challenge - 878. Middle of linked list

Given the head of a single linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node

Example:
Input: head = [1, 2, 3, 4, 5]
Output: [3, 4, 5]

Link: https://leetcode.com/problems/middle-of-the-linked-list/
 */

const middleNode = (head) => {
  let count = 0;
  let node = head;

  // to find the length of linked list
  while (node !== null) {
    count++;
    node = node.next;
  }

  for (let i = 0; i < Math.floor(count / 2); i++) {
    head = head.next;
  }
  return head;
};

module.exports = middleNode;
