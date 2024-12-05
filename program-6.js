// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

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
      if (!ans.includes(arr2[j])) {
        ans.push(arr2[j]);
      }
      j++;
    } else {
      if (!ans.includes(arr1[i])) {
        ans.push(arr1[i]);
      }
      i++;
    }
    k++;
  }
  while (i < arr1.length) {
    if (!ans.includes(arr1[i])) {
      ans.push(arr2[j]);
    }
    i++;
  }
  while (j < arr2.length) {
    if (!ans.includes(arr2[j])) {
      ans.push(arr2[j]);
    }
    j++;
  }
  return ans;
}

console.log(merge([1, 2, 3, 4, 5, 6], [3, 4, 5, 7]));
