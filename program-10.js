// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
arr1 = [1, 0, 2, 3, 4];
arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

function sum(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let ans = [];
  while (i < arr1.length && j < arr2.length) {
    ans.push(arr1[i] + arr2[j]);
    i++;
    j++;
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

console.log(sum(arr1, arr2));
