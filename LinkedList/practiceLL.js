class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
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
    return this.head;
  }

  size() {
    if (!this.head) return 0;

    let current = this.head;
    let count = 0;

    while (current) {
      // console.log(`${count}`, current);
      count++;
      current = current.next;
    }
    console.log("current", current);
    return count;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    return current.data;
  }

  getFirst() {
    if (!this.head) return null;

    return this.head.data;
  }
}

const list = new LinkedList();
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());
console.log(list.insert(1));
console.log(list.insert(2));
console.log(list.insert(3));
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());
console.log(list.insert(4));
console.log(list.insert(5));
console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());
