function randomPivot(arr) {
  if (arr.length < 2) return arr;
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  const left = [];
  const right = [];
  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return randomPivot(left).concat(pivot, randomPivot(right));
}
let arr=[6,8,7,4,2,9]
console.log(randomPivot(arr))
