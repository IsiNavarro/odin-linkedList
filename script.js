class Node {
  constructor(input = null) {
    this.value = input;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  get size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  at(index) {
    if (index <= 0) return undefined;
    let node = this.head;
    for (let i = 1; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  get tail() {
    return this.at(this.size);
  }

  append(value) {
    this.tail.next = new Node(value);
  }

  prepend(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
  }

  pop() {
    const popped = this.tail;
    this.at(this.size - 1).next = null;

    return popped;
  }

  find(value) {
    let node = this.head;
    let index = 1;
    while (node) {
      if (node.value === value) return index;
      node = node.next;
      index++;
    }
    return null;
  }

  contains(value) {
    if (this.find(value)) return true;
    else return false;
  }

  toString() {
    let node = this.head.next;
    let string = `( ${this.head.value} )`;
    while (node) {
      string = `${string} -> ( ${node.value} )`;
      node = node.next;
    }
    return `${string} -> null`;
  }

  insertAt(value, index) {
    let oldNode = this.at(index);
    this.at(index - 1).next = new Node(value);
    this.at(index).next = oldNode;
  }

  removeAt(index) {
    let oldNode = this.at(index);
    this.at(index - 1).next = oldNode.next;

    oldNode = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

const list = new LinkedList(node1);

console.log(list);
