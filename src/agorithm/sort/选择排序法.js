/*
选择排序算法是一种原址比较排序算法。选择排序算法的思路是：
找到数据结构中的最小值并 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。
选择排序算法的复杂度是 O(n²)
*/

function selectionSort(arr) {
  let minIndex
  let temp
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      temp = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = temp
    }
  }
  return arr
}

let testArr=[45,1,7,3,21,67,33,1,22,4]
console.log(selectionSort(testArr))