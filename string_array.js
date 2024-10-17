let arrstr = ["er", "twinkkr", "xv", "two"]
arrstr.sort();
console.log(arrstr);

let arr = [45, 56, 67, 34, 20]
arr.sort(function(a,b){return a-b});
console.log(arr);

let arr1 = [45, 56, 67, 34, 20]
arr1.sort(function(a,b){return b-a});
console.log(arr1);

let output = arr1.reduce(function(a,b){return a+b});
console.log(output);

let answerstr = arr1.toString()
console.log(answerstr);

let answerjoin = arr1.join(" ")
console.log(answerjoin);

//higher order method
//map
//reduce(sum)
//number sort
//find
//filter
//foreach