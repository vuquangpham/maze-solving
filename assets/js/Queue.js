class NodeQ {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  enqueue(element) {
    const newNode = new NodeQ(element);

    if (this.head === null) {
      this.head = this.tail = newNode;
      this.size++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  dequeue() {
    if (this.head === null) return null;

    const node = this.head;
    this.head = this.head.next;
    node.next = null;
    this.size--;
    return node.element;
  }

  find(element) {
    let node = this.head;
    while (node) {
      if (node.element === element) return true;
      node = node.next;
    }
    return false;
  }
}
