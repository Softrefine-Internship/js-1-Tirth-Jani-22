// Write a JavaScript program to clone an array.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  arr2.push(element);
}

console.log(typeof arr1)