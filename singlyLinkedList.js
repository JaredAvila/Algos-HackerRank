class SLL {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  printAll() {
    const array = [];
    let runner = this.head;
    while (runner != null) {
      array.push(runner.value);
      runner = runner.next;
    }
    return array;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const currentNode = this.traverseToIndex(index - 1);
    const placeHolder = currentNode.next;
    currentNode.next = newNode;
    newNode.next = placeHolder;
    this.length++;
    return this;
  }
  remove(index) {
    const previousNode = this.traverseToIndex(index - 1);
    previousNode.next = previousNode.next.next;
    this.length--;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
