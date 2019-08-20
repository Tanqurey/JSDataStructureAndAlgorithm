/*
这一节介绍双向链表。双向链表和普通链表的区别在于，在链表中，
 一个节点只有链向下一个节点的链接，而在双向链表中，
 链接是双向的:一个链向下一个元素， 另一个链向前一个元素，如下图所示:
双向链表提供了两种迭代列表的方法:从头到尾，或者反过来。
我们也可以访问一个特定节 点的下一个或前一个元素。在单向链表中，如果迭代列表时错过了要找的元素，
就需要回到列表 起点，重新开始迭代。这是双向链表的一个优点。

*/

// 节点类

class Node {
  constructor(element) {
    this.pre = null
    this.next = null
    this.element = element
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null //头指针
    this.tail = null //尾指针
    this.length = 0
  }

  //插入元素
  insert(position, element) {
    const newNode = new Node(element)
    if (position < 0 || position > this.length) {
      return false
    }

    if (!this.length) {
      newNode.pre = null
      newNode.next = null
      this.head = newNode
      this.tail = newNode
      this.length++
      return true
    }

    if (position === 0) {
      newNode.pre = null
      this.head.pre = newNode
      newNode.next = this.head
      this.head = newNode
    } else if (position === this.length) {
      newNode.next = null
      this.tail.next = newNode
      newNode.pre = this.tail
      this.tail = newNode
    } else {
      let index = 0
      let current = this.head
      while (index++ < position) {
        current = current.next
      }
      newNode.next = current
      newNode.pre = current.pre
      current.pre.next = newNode
      current.pre = newNode
    }
    this.length++
    return true
  }
  //删除元素
  remove(position) {
    if (!this.length || position < 0 || position >= this.length) return null
    let removeEle
    if (position === 0) {
      const newHead = this.head.next
      removeEle = this.head
      newHead.pre = null
      this.head = newHead
    } else if (position === this.length - 1) {
      const newTail = this.tail.pre
      removeEle = this.tail
      newTail.next = null
      this.tail = newTail
    } else {
      let index = 0
      let current = this.head
      while (index++ < position) {
        current = current.next
      }
      removeEle = current
      current.pre.next = current.next
      current.next.pre = current.pre
    }
    this.length--
    return removeEle.element
  }
  //反转链表

  //清空链表
  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }
}

let dll = new DoublyLinkedList()
console.log(dll.insert(0, 'a'))
console.log(dll.insert(1, 'c'))
console.log(dll.insert(0, 'b'))

console.log(dll.remove(1))
console.log(dll)