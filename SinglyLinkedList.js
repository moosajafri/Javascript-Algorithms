class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addNodeToBeginning(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addNodeToEnd(data) {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let iterator = this.head;
    while (iterator.next != null) {
      iterator = iterator.next;
    }
    iterator.next = newNode;
  }

  addNodeAfter(targetData, newData) {
    let iterator = this.head;
    while (iterator !== null) {
      if (iterator.data === targetData && iterator.next === null) {
        const newNode = new ListNode(newData);
        iterator.next = newNode;
        break;
      } else if (iterator.data === targetData) {
        const newNode = new ListNode(newData);
        const temp = iterator.next;
        iterator.next = newNode;
        newNode.next = temp;
        break;
      }
      iterator = iterator.next;
    }
  }

  deleteNode(targetData) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === targetData) {
      this.head = this.head.next;
      return;
    }

    let iterator = this.head.next;
    let previousIterator = this.head;
    while (iterator !== null) {
      if (iterator.data === targetData) {
        previousIterator.next = iterator.next;
        break;
      }
      iterator = iterator.next;
      previousIterator = previousIterator.next;
    }
  }

  size() {
    let iterator = this.head;
    let counter = 0;
    while (iterator != null) {
      counter = counter + 1;
      iterator = iterator.next;
    }
    return counter;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let iterator = this.head;
    while (iterator != null) {
      iterator = iterator.next;
    }
    return iterator;
  }
  printList() {
    let iterator = this.head;
    while (iterator != null) {
      console.log(iterator.data + " ");
      iterator = iterator.next;
    }
    console.log("----------------" + "\n");
  }
}

var myLinkedList = new LinkedList();

myLinkedList.deleteNode(4);
myLinkedList.addNodeToBeginning(4);
myLinkedList.deleteNode(4);
myLinkedList.printList();
myLinkedList.addNodeToBeginning(7);
myLinkedList.printList();
myLinkedList.addNodeToBeginning(9);
myLinkedList.printList();
myLinkedList.addNodeToEnd(99);
myLinkedList.printList();
myLinkedList.addNodeToEnd(100);
myLinkedList.printList();
myLinkedList.addNodeAfter(7, 33);
myLinkedList.printList();
myLinkedList.deleteNode(99);
myLinkedList.printList();
myLinkedList.deleteNode(100);
myLinkedList.printList();
myLinkedList.deleteNode(9);
myLinkedList.printList();
myLinkedList.deleteNode(33);
myLinkedList.printList();

console.log("total size is " + myLinkedList.size());
