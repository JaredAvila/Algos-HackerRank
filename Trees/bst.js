class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class bST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = new Node(value);
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = new Node(value);
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  lookup(value) {}
}

const tree = new bST();

tree.insert(9);
tree.insert(20);
tree.insert(4);
tree.insert(15);
tree.insert(6);
tree.insert(170);
tree.insert(1);

//         9
//      4       20
//   1    6  15     170

const traverse = node => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

console.log(JSON.stringify(traverse(tree.root)));
