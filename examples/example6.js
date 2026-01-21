// AND (&& operator)
// 0 0 -> 0
// 1 0 -> 0
// 0 1 -> 0
// 1 1 -> 1

// OR (|| operator)
// 0 0 -> 0
// 0 1 -> 1
// 1 0 -> 1
// 1 1 -> 1

let x=10;
let y=20;

console.log(x===10 && y===20);
console.log(x===11 || y===20);
