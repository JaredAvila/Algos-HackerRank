class ArrayStack {
  constructor() {
    this.stack = [];
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }
  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    }
    return false;
  }
}

const myStack = new ArrayStack();
myStack.push("Google");
myStack.push("Facebook");
myStack.push("YouTube");
console.log(myStack);
