const { NotImplementedError } = require('../extensions/index.js');

class Stack {

  constructor(){
    this.array = [];
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    let popped = this.array.pop();
    return popped;
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

module.exports = {
  Stack
};
