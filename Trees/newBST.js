class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val > currentNode.value) {
        //go right
        if (!currentNode.right) {
          currentNode.right = node;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        //go left
        if (!currentNode.left) {
          currentNode.left = node;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  lookUp(val) {
    if (!this.root) return undefined;
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.value) {
        return currentNode;
      } else {
        if (val < currentNode.value) {
          //go left
          if (!currentNode.left) {
            return undefined;
          }
          currentNode = currentNode.left;
        } else {
          //go right
          if (!currentNode.right) {
            return undefined;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  bfs() {
    if (!this.root) return undefined;
    let currentNode = this.root,
      list = [],
      queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currenNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  bfsRec(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.bfsRec(queue, list);
  }

  dfsInOrder() {
    return traverseInOrder(this.root, []);
  }
  dfsPostOrder() {
    return traversePostOrder(this.root, []);
  }
  dfsPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

const traverseInOrder = (node, list) => {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
};

const traversePreOrder = (node, list) => {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
};

const traversePostOrder = (node, list) => {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
};

const tree = new BST();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
