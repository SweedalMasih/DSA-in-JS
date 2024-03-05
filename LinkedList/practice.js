class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return this.head;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    // console.log(current, this.head)
    return current;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;

    /*
      another way: without using prev
      while(current.next.next) {
          current = current.next;
      }
      current.next = null
      */

    // console.log(current, this.head)

    return this.head;
  }

  unshift(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return this.head;
    }

    let current = this.head;
    node.next = current;
    this.head = node;

    // console.log(current, this.head)
    return this.head;
  }

  shift() {
    if (!this.head || !this.head.next) {
      return;
    }

    let current = this.head;
    this.head = current.next;

    return this.head;
  }

  printElements() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myLL = new LinkedList();
console.log(myLL.push(1));
console.log(myLL.push(2));
console.log(myLL.push(3));
console.log(myLL.push(4));
console.log(myLL.push(5));
console.log(myLL.push(6));
console.log(myLL.push(7));
console.log(myLL.pop());

console.log(myLL.unshift(0));
console.log(myLL.unshift(-1));
console.log(myLL.shift());

console.log(myLL.printElements());
