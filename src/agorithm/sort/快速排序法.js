// 快速排序法

/*
快速排序也许是最常用的排序算法了。它的复杂度为O(nlog^n)，且它的性能通常比其他的复杂度为O(nlog^n)的排序算法要好。
和归并排序一样，快速排序也使用分治的方法，将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开)

首先，从数组中选择中间一项作为主元

创建两个指针，左边一个指向数组第一个项，右边一个指向数组最后一个项。
移动左指 针直到我们找到一个比主元大的元素，接着，
移动右指针直到找到一个比主元小的元素，然后交 换它们，重
复这个过程，直到左指针超过了右指针。
这个过程将使得比主元小的值都排在主元之 前，
而比主元大的值都排在主元之后。这一步叫作划分操作。

接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的 子数组）重复之前的两个步骤，直至数组已完全排序。

*/

const quickSort = function (arr) {
  const sort = function (array, left, right) {
    let i = left
    let j = right
    let ref = array[Math.floor((left + right) / 2)]

    while (i <= j) {
      while (array[i] < ref) {
        i++
      }
      while (array[j] > ref) {
        j--
      }
      if (i <= j) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp
        i++
        j--
      }
    }
    return i
  }

  const prepare = function (array, left, right) {
    let index
    if (array.length > 1) {
      index = sort(array, left, right)
      if (left < index - 1) {
        prepare(array, left, index - 1)
      }
      if (index < right) {
        prepare(array, index, right)
      }
    }
  }

  prepare(arr, 0, arr.length - 1)
  return arr
}

let testArr = [7, 2, 4, 8, 2, 5, 8]
console.log(quickSort(testArr))