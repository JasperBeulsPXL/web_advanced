const numbersArray = [1,2,3,4,5];

let [one,two, ,...rest] = numbersArray;
console.log(one,two, rest);
// output: 1 2 [4,5]