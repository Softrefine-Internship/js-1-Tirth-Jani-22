// /* 
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
// */

// // Example 1:
// // Input: flowerbed = [1,0,0,0,1], n = 1
// // Output: true

// // Example 2:
// // Output: false

// flowerbed = [1, 0, 0, 0, 1];
// function isProper(flowerbed, index) {
//   if (
//     index > 0 &&
//     flowerbed[index] != 1 &&
//     index < flowerbed.length - 1 &&
//     flowerbed[index - 1] != 1 &&
//     flowerbed[index + 1] != 1
//   ) {
//     return true;
//   }
//   if (index == 0 || index == flowerbed.length - 1) {
//     return true;
//   }
//   return false;
// }

// function solution(flowerbed, n) {
//   flag = false;
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (isProper(flowerbed, i) && flowerbed[i] != 1) {
//       n--;
//       flowerbed[i] = 1;
//       flag = true;
//     }
//   }
//   return flag;
// }

// function fun(flowerbed, n) {
//   while (n > 0) {
//     bool = solution(flowerbed, n);
//     n--;

//     if (!bool) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(fun(flowerbed, 2));

flowerbed = [1,0,0,0,0,0,1,0,0];
function isProper(flowerbed, index) {
  if (
    index > 0 &&
    flowerbed[index] != 1 &&
    index < flowerbed.length - 1 &&
    flowerbed[index - 1] != 1 &&
    flowerbed[index + 1] != 1
  ) {
    return true;
  }
  if (index == 0 || index == flowerbed.length - 1) {
    return true;
  }
  return false;
}

function solution(flowerbed, n) {
  flag = false;
  for (let i = 0; i < flowerbed.length; i++) {
    if (isProper(flowerbed, i) && flowerbed[i] != 1) {
      n--;
      flowerbed[i] = 1;
      flag = true;
      return true
    }
  }
  return flag;
}

function fun(flowerbed, n) {
  while (n > 0) {
    bool = solution(flowerbed, n);
    console.log(flowerbed)
    n--;

    if (!bool) {
      return false;
    }
  }
  return true;
}
console.log(fun(flowerbed, 3));
 
