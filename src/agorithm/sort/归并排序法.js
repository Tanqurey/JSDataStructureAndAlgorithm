/*
归并排序是第一个可以被实际使用的排序算法。归并排序性能不错，其复杂度为O(n log^n)。
归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一 个位置，
接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组
算法首先将原始数组分割直至只有一个元素的子数组，然后开始归并。
归并过程也会完成排序，直至原始数组完全合并并完成排序。
*/

function mergeSort(arr) {
  // 进行归并小数组的排序，并合并数组
  const merge = function (left, right) {
    let res = []
    let il = 0
    let ir = 0
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        res.push(left[il++])
      } else {
        res.push(right[ir++])
      }
    }
    while (il < left.length) {
      res.push(left[il++])
    }
    while (ir < right.length) {
      res.push(right[ir++])
    }
    return res
  }

  // 依次进行数组拆分
  const divideArr = function (arr) {
    if (arr.length === 1) {
      return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(divideArr(left), divideArr(right))
  }
  return divideArr(arr)
}

let testArr = [7, 2, 4, 8, 2, 5, 8]
console.log(mergeSort(testArr))