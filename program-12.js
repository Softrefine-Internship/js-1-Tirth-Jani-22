// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
function diff(arr1, arr2) {
  const ans = [];
  for (let i = 0; i < arr1.length; i++) {
    const ele = arr1[i];
    if (!arr2.includes(arr1[i])) {
      ans.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    const ele = arr2[i];
    if (!arr1.includes(arr2[i])) {
      ans.push(arr2[i]);
    }
  }
  return sort(ans);
}
console.log(diff([1, 2, 3], [100, 2, 1, 10]));
