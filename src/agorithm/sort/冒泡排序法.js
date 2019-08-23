/*
冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们。
元素项向上移动至 正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
冒泡排序算法的复杂度是 O(n²)，并不推荐此算法
最好情况下的时间复杂度是O(n)
*/

//升序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

let testArr = [7, 2, 4, 8, 2, 5, 8]
console.log(bubbleSort(testArr))