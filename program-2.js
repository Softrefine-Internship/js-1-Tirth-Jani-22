// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7], 8]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

function flattenArray(arr1) {
  let ans = [];
  addFlat(ans, arr1);
  return ans;
}

function addFlat(ans, arr) {
  curr = arr;
  for (let i = 0; i < curr.length; i++) {
    const element = arr[i];
    if (typeof element == "object") {
      addFlat(ans, element);
    } else {
      ans.push(element);
    }
  }
}
arr = [1, 2, [3, [4, 5]], [5, [6, 7]]];
console.log(flattenArray(arr));
