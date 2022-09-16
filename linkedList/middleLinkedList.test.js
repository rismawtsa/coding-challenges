const Node = require("./node");
const middleNode = require("./middleLinkedList");

test(`middleNode([1, 2, 3, 4, 5])} should return [3, 4, 5]`, () => {
  const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  const middleNodes = new Node(3, new Node(4, new Node(5)));

  expect(middleNode(head)).toEqual(middleNodes);
});

test(`middleNode([1, 2, 3, 4, 5, 6])} should return 4, 5, 6]`, () => {
  const head = new Node(
    1,
    new Node(2, new Node(3, new Node(4, new Node(5, new Node(6)))))
  );
  const middleNodes = new Node(4, new Node(5, new Node(6)));

  expect(middleNode(head)).toEqual(middleNodes);
});
