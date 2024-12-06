// // Write javascript program to remove duplicate objects from an array.

// // Sample Input:
// array = [
//   { title: "C++", author: "Bjarne" },
//   { title: "Java", author: "James" },
//   { title: "Python", author: "Guido" },
//   { title: "Java", author: "James" },
// ];

// // Expected Output:
// // [
// //  { title: 'C++', author: 'Bjarne' },
// //  { title: 'Java', author: 'James' },
// //  { title: 'Python', author: 'Guido' }
// // ]

// function removeDubli(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     curr = arr.splice(i, 1);
//     bool = false;
//     for (let j = 0; j < arr.length; j++) {
//       const ele = arr[j];

//       if (ele.title == curr[0].title && ele.author == curr[0].author) {
//         bool = true;
//       }
//     }
//     if (!bool) arr.splice(i, 0, ...curr);
//   }
//   return arr;
// }
// console.log(removeDubli(array));


function removeDubli(arr) {
  for (let i = 0; i < arr.length; i++) {
    curr = arr.splice(i, 1);
    bool = false;
    for (let j = 0; j < arr.length; j++) {
      const ele = arr[j];

      if (JSON.stringify(ele) == JSON.stringify(curr[0]) ) {
        bool = true;
      }
    }
    if (!bool) arr.splice(i, 0, ...curr);
  }
  return arr;
}
arr = [{id:1,num:[1,2,3]},{id:1,num:[1,2,3]},{id:2,num:[1,2,3,4]}]
console.log(removeDubli(arr));
