let arr = [34,56,9,2,9,"hello"];
let arr2 = ["this is array class"];
let arr3 = [34,4,5,78,function(){console.log("function call")}];
let arr4 = [null, undefined,4,5,78,3<7];

console.log(arr);
console.log(arr[5]);
console.log(arr[5][2]);
console.log(arr2[0][3]);
// arr3[5]();
console.log(arr4[4]);

console.log(typeof(arr));

for(let i =0; i<arr.length;i++){
    console.log(i);
    console.log(arr[i])
}

for(let i in arr){
    console.log(i)
}

for(let i of arr){
    //element of array
    console.log(i)
}

