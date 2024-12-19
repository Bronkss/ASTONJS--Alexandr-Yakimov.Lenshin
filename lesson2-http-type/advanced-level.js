class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}

const treeFirst = new Tree();
const treeSecond = new Tree();

treeFirst.addNode(10);
treeFirst.addNode(9);
treeFirst.addNode(8);
treeFirst.addNode(11);
treeFirst.addNode(12);

treeSecond.addNode(10);
treeSecond.addNode(9);
treeSecond.addNode(8);
treeSecond.addNode(11);
treeSecond.addNode(12);

function compareNodes(objFirst, objSecond) {
  return JSON.stringify(objFirst) === JSON.stringify(objSecond);
}

console.log(compareNodes(treeFirst, treeSecond));
