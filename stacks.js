class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.isEmpty()) {
      return this.top;
    }
    let newTop = this.top.next;
    this.top.next = null;
    let poppedNode = this.top;
    this.top = newTop;
    this.length--;
    return poppedNode;
  }
  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Facebook");
myStack.push("YouTube");
myStack.pop();
console.log(myStack);
