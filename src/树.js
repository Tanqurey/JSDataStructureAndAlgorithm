/*
树是一种非常重要的非线性数据结构
它对于存储需要快速查找的数据非常有用。

结点拥有的子树数目称为结点的度
度为0的节点称为叶子结点
树的度是各结点的度的最大值

结点的子树的根称为该结点的孩子，该结点称为孩子的双亲
同一个双亲的孩子互称兄弟
结点的祖先是从根到该结点所经分支上的所有结点
同理，以某结点为根的子树中的任意结点都是该结点的子孙

树中结点的最大层次成为树的深度

二叉树中的节点最多只能有两个子节点：
一个是左侧子节点，另一个是右侧子节点。
这些定 义有助于我们写出更高效的向/从树中插入、查找和删除节点的算法

二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值， 
在右侧节点存储（比父节点）大（或者等于）的值。
下面实现一个二叉搜索树
*/

// 结点类
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
    this.p = null
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  //向树中插入结点
  insert(key) {
    let newNode = new Node(key)

    const insertNode = function (node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
          newNode.p = node
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
          newNode.p = node
        } else {
          insertNode(node.right, newNode)
        }
      }
    }

    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  // 查找指定结点
  // 只返回找到的第一个

  find(key) {
    const findKey = function (node, key) {
      if (node === null) return null
      if (node.key === key) {
        return node
      } else {
        if (node.key < key) {
          return findKey(node.right, key)
        } else {
          return findKey(node.left, key)
        }
      }
    }
    return findKey(this.root, key)
  }

  //查找树中键的最小/大值
  // 原理：通过从树根开始沿着left leftleft孩子指针直到遇到一个null，我们总能在一颗二叉搜索树中找到一个元素
  findMax() {
    if (!this.root) return null
    let current = this.root
    let max
    while (current) {
      max = current.key
      current = current.right
    }
    return max
  }

  findMin() {
    if (!this.root) return null
    let current = this.root
    let min
    while (current) {
      min = current.key
      current = current.left
    }
    return min
  }

  //移除元素

  /*
  从树中移除结点x可分为3种情况
  1)如果x没有孩子结点，那么只是简单地将它删除，并修改它的父结点,用null来替换x
  2) 如果x只有一个孩子，那么修改父节点把这个孩子替换掉x
  3)  如果x有两个孩子，则右孩子替换掉x，左孩子作上述右孩子的左结点
  */

  remove(key) {
    let removeNode = this.find(key)
    if (!removeNode) return false
    const transportNode = function (u, v) {
      // 结点替代
      if (!u.p) {
        this.root = v
      } else if (u === u.p.left) {
        u.p.left = v
      } else {
        u.p.right = v
      }
      if (v) {
        v.p = u.p
      }
    }
    let left = removeNode.left
    let right = removeNode.right
    if (left && right) {
      left.p = right
      right.left = left
      transportNode(removeNode, right)
    } else if (!left && !right) {
      transportNode(removeNode, null)
    } else {
      let replceNode = left || right
      transportNode(removeNode, replceNode)
    }
    return true
  }

  // 只示范中序遍历
  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
      }
    }
    inOrderTraverseNode(this.root, callback)
  }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(7)
bst.insert(11)
bst.insert(19)
bst.insert(6)
bst.insert(9)

bst.inOrderTraverse((key) => {
  console.log(key)
})

// console.log(bst.find(11))