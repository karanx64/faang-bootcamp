function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
function arrMax(arr) {
  let max = 0;
  let current;
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    if (current > max) {
      max = current;
    }
  }
  console.log(max);
}
let myArr = [1, 2, 7, 4, 5, 6];
arrSum(myArr);
arrMax(myArr);
