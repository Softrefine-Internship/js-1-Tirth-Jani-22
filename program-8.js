// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

function insertChar(str, index, char) {
  return str.slice(0, index) + char + str.slice(index);
}

function fun(s) {
  let ans = "";
  let k = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const element1 = s[i];
    const element2 = s[i + 1];
    ans = insertChar(ans, k, element1);
    k++;
    if (Math.ceil(element1) % 2 == 0 && Math.ceil(element2) % 2 == 0) {
      ans = insertChar(ans, k, "-");
      k++;
    }
  }
  ans = insertChar(ans, k,s.charAt(s.length-1));
  return ans;
}
console.log(fun("025468"));
