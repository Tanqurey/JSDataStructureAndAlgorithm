/*
链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。
每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成。

要想访问链表中间的一个元素，需要从起点(表头)开始迭代列表直到找到所需的元素。
*/

// 链表节点类
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// 链表类
class LinkList {
  constructor() {
    this.head = null //头结点
    this.length = 0
  }

  //追加元素
  append(element) {
    const node = new Node(element)
    let current = null
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      node.next = null
    }
    this.length++
  }

  //任意位置插入元素
  insert(position, element) {
    const node = new Node(element)
    if (position === 0) {
      node.next = this.head
      this.head = node
    } else {
      let current = this.head
      let index = 0
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      node.next = previous.next
      previous.next = node
    }
    this.length++
  }

  //反转链表
  reverse() {
    let newLinkList = new LinkList()
    newLinkList.length = this.length
    let current = this.head
    while (current) {
      const newNode = new Node(current.element)
      if (!newLinkList.head) {
        newLinkList.head = newNode
      } else {
        newNode.next = newLinkList.head
        newLinkList.head = newNode
      }
      current = current.next
    }
    return newLinkList
  }

  // 获取指定位置的元素
  getElement(position) {
    if (position < 0 || position >= this.length) return null
    if (position === 0) return this.head.element
    let current = this.head
    let index = 0
    while (++index !== position) {
      current = current.next
    }
    return current.next.element
  }

  // 移除指定位置元素
  removeElement(position) {
    if (position < 0 || position >= this.length) return null
    if (position === 0) {
      const head = this.head.element
      this.head = this.head.next
      this.length--
      return head
    }
    let current = this.head
    let index = 0
    while (++index !== position) {
      current = current.next
    }
    let removeNode = current.next
    current.next = removeNode.next
    this.length--
    return removeNode.element
  }

  // 获取长度
  get size() {
    return this.length
  }

  //清空
  clear() {
    this.head = null
    this.length = 0
  }
}

let ll1 = new LinkList()
ll1.append('a')
ll1.append('b')
ll1.append('c')
ll1.append('d')
ll1.append('e')

ll1.removeElement(3)
ll1.removeElement(0)

console.log(ll1.getElement(1))