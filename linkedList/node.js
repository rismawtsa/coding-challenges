class Node {
  constructor(val, next) {
    this.data = val;
    this.next = next === undefined ? null : next;
  }
}

module.exports = Node;
