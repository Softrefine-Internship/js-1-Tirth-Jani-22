// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1] [1,3,5]
// arr2 = [4, 2] [2,4]

// Expected output: [1, 2, 3, 4, 5]

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

function merge(arr1, arr2) {
  arr1 = sort(arr1);
  arr2 = sort(arr2);
  let i = 0;
  let j = 0;
  let k = 0;
  let ans = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      ans.push(arr2[j]);
      j++;
    } else {
      ans.push(arr1[i]);
      i++;
    }
    k++;
  }
  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    ans.push(arr2[j]);
    j++;
  }
  return ans;
}

console.log(merge([3, 5, 1], [4, 2]));
