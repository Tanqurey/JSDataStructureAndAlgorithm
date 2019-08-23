/*
集合是由一组无序且唯一（不能重复）的项组成的。

目前 ES6 中已内置了 Set 类型的实现.

*/

class MySet {
  constructor() {
    this.items = {}
  }

  has(val) {
    return Reflect.has(this.items, val)
  }

  get(key) {
    return Reflect.get(this.items, key)
  }

  add(val) {
    if (!this.has(val)) {
      Reflect.set(this.items, val, val)
      return true
    }
    return false
  }

  delete(val) {
    if (!this.has(val)) return false
    return Reflect.deleteProperty(this.items, val)
  }

  clear() {
    this.items = {}
    return true
  }

  // 求交集,接收一个数组
  static and(...values) {
    let resSet = new MySet()
    if (!values.length) return resSet
    for (let val in values[0].items) {
      resSet.add(val)
    }
    for (let i = 1; i < values.length; i++) {
      for (let val in resSet.items) {
        if (!values[i].has(val)) {
          resSet.delete(val)
        }
      }
    }
    return resSet
  }

  //求并集
  static or(...values) {
    let resSet = new MySet()
    if (!values.length) return resSet
    for (let i = 0; i < values.length; i++) {
      for (let val in values[i].items) {
        if (!resSet.has(val)) {
          resSet.add(val)
        }
      }
    }
    return resSet
  }

  // 验证是否为子集
  static isSubset(set, subset) {
    for (let val in subset.items) {
      if (!set.has(val)) {
        return false
      }
    }
    return true
  }

  // 求差集,求第一个参数相对第二个的
  static differenceSet(set1, set2) {
    const andSet = this.and(set1, set2)
    let resSet = new MySet()
    for (let val in set1.items) {
      if (!andSet.has(val)) {
        resSet.add(val)
      }
    }
    return resSet
  }
}

let s1 = new MySet()
let s2 = new MySet()
let s3 = new MySet()
let s4 = new MySet()

s1.add('cc')
s1.add(18)
s1.add('male')

s2.add('cc')
s2.add(14)
s2.add('female')

s3.add('cc')
s3.add(12)
s3.add('female')

s4.add('cc')

console.log(MySet.and(s1, s2, s3))
console.log(MySet.or(s1, s2, s3))
console.log(MySet.isSubset(s1, s4))
console.log(MySet.differenceSet(s1, s4))
