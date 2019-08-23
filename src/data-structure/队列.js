/*
队列是一种遵循先进先出 (FIFO / First In First Out) 原则的一组有序的项；
队列在尾部添加新元素，并从头部移除元素。最新添加的元素必须排在队列的末尾。
*/

class Queue {
  constructor(items) {
    this.items = items || []
  }

  enqueue(item) {
    // 入队
    this.items.push(item)
  }

  dequeue() {
    // 出队
    this.items.shift()
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return this.items.length === 0
  }

  get front() {
    return this.items[0]
  }

  clear() {
    this.items = []
  }
}

//示范使用

let q1 = new Queue([1, 2, 3, 4, 5, 6])

console.log(q1)

q1.enqueue(7)

console.log(q1)

q1.dequeue()

console.log(q1)
console.log(q1.size)
console.log(q1.isEmpty)
console.log(q1.front)

// 优先级队列

/*
在生活中，我们常常需要按照优先级确立顺序，这就产生了优先级队列

*/

class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue(priority, ele) {
    const eleObj = {
      priority: priority,
      element: ele
    }
    if (!this.items.length || this.items[this.items.length - 1].priority >= eleObj.priority) return this.items.push(eleObj)
    const nextIndex = this.items.findIndex(item => item.priority < eleObj.priority)
    return this.items.splice(nextIndex, 0, eleObj)
  }

  dequeue() {
    return this.items.shift()
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return this.items.length === 0
  }

  get front() {
    return this.items[0]
  }

  clear() {
    this.items = []
  }
}

//示范使用

let q2 = new PriorityQueue()

q2.enqueue(3, 'c')
q2.enqueue(1, 'a')
q2.enqueue(2, 'b')
q2.enqueue(0, 'e')
q2.enqueue(4, 'd')
q2.enqueue(1, 'f')

console.log(q2)

/*
循环队列
为充分利用向量空间，克服"假溢出"现象的方法是：
将向量空间想象为一个首尾相接的圆环，并称这种向量为循环向量。
存储在其中的队列称为循环队列（Circular Queue）。
这种循环队列可以以单链表、队列的方式来在实际编程应用中来实现。
*/

class LoopQueue extends Queue {
  constructor(items) {
    super(items)
  }

  getIndex(index) {
    const length = this.items.length
    return index > length ? (index % length) : index
  }

  find(index) {
    return !this.isEmpty ? this.items[this.getIndex(index)] : null
  }

}