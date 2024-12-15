let myArr = [7, 6, 1, 5, 2, 13];
let moreNumber = [5, 8, 11, 0, 4];

let result = myArr.reduce((acc, c) => acc + c);
let average = myArr.reduce((acc, c, i, a) => acc + c / a.length, 0);
let max = myArr.reduce((acc, c) => Math.max(acc, c));


console.log(result);
console.log(average);
console.log(max);