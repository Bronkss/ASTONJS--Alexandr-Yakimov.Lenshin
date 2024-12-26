// Продвинутый:
// Дан объект Node со структурой ’Tree’

// Node:
//   value: <number>,
//   left: <Node> | undefined,
//   right: <Node> | undefined

// Структура объекта может быть очень большой (условно содержать миллион Node).

// Напишите функцию compare, принимающую на вход два объекта Node, и возвращающую true, если они имеют одинаковую структуру и значения и false в ином случае.

// Пример:

//  1             1
//  |  \           |  \
// 2   3        2    3

// => true

//  1            1
//  |  \          |  \
// 3   3       2   3

// => false (значения не одинаковые 2 != 3)

//  1            1
//  |  \          |
// 2   3        2
//                |
//                3

// => false (разная структура)

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

  searchInTree(node) {
    if (node === 0) return null;

    if (data < node.data) {
      const newNode =
        node.left === null ? new Node(data) : searchInTree(node.left);

      return newNode;
    } else {
      const newNode =
        node.right === null ? new Node(data) : searchInTree(node.right);

      return newNode;
    }
  }

  addNode(data, direction) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);

      return;
    } else {
      return searchInTree(node);
    }
  }
}

const treeFirst = new Tree();
const treeSecond = new Tree();

function compareThrees(first, second) {
  return JSON.stringify(first) === JSON.stringify(second);
}
console.log(compareThrees(treeFirst, treeSecond));
