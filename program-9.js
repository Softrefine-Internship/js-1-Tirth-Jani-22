// // Write a JavaScript program to find the most frequent item in an array.

// arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// // Expected Output : console.log(a, "5 times")
// function fun(arr) {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i];
//     if (map.has(ele)) {
//       val = map.get(ele);
//       map.set(ele, val + 1);
//     } else {
//       map.set(ele, 1);
//     }
//   }
//   console.log(map);
//   min = 0;
//   k = null;
//   map.forEach((val, key, map) => {
//     if (val > min) {
//       k = key;
//       min = val;
//     }
//   });
//   console.log(k, " : ", min, " Times");
// }

// fun(arr);

// Write a JavaScript program to find the most frequent item in an array.

arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3,3];
// Expected Output : console.log(a, "5 times")
function fun(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (map.has(ele)) {
      val = map.get(ele);
      map.set(ele, val + 1);
    } else {
      map.set(ele, 1);
    }
  }
  console.log(map);
  ans = []
  min = 0;
  k = null;
  map.forEach((val, key, map) => {
    if (val > min) {
      k = key;
      min = val;
    }
  });
  map.forEach((val, key, map) => {
    if (val == min) {
      ans.push({
          key:key,
          val:val
      })
    }
  });
  ans.map((ele)=>{
      console.log(ele.key, " : ", ele.val, " Times");
  })
}

fun(arr);
