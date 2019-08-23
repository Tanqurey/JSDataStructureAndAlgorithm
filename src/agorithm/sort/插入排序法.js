/*
插人排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了，
接着， 它和第二项进行比较，第二项是应该待在原位还是插到第一项之前呢？
这样，头两项就已正确排 序，接着和第三项比较（它是该插人到第一、第二还是第三的位置呢？），以此类推。
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let temp = arr[i]
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j]
      arr[j] = temp
      j--
    }
  }
  return arr

}

let testArr = [45, 1, 7, 3, 21, 67, 33, 1, 22, 4]
console.log(insertionSort(testArr))