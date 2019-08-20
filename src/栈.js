/*
先进后出的结构。新元素靠近栈顶，旧元素靠近栈底
*/

class Stack {
  constructor(items) {
    this.items = items || []
  }

  pop() {
    // 出栈
    return this.items.pop()
  }

  push(item) {
    // 入栈
    return this.items.push(item)
  }

  get size() {
    return this.items.length
  }

  get peak() {
    if (!this.items.length) return ''
    return this.items[this.items.length - 1]
  }

  get isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

}

//示范使用

let s1 = new Stack([1, 2, 3, 4, 5])

console.log(s1[0]) //undefined

console.log(s1.peak) //5

s1.pop()

console.log(s1.peak) //4

s1.push(6)

console.log(s1.peak) //6

console.log(s1.size)

console.log(s1.isEmpty)