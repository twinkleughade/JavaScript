let a = Math.PI;
console.log(a);
let b = Math.SQRT2;
console.log(b);
let c = 56.7;
console.log(Math.round(c))
console.log(Math.floor(c))
console.log(Math.ceil(c))
console.log(Math.trunc(c))
console.log(Math.abs(c))
console.log(Math.pow(5,5));
console.log(Math.random());

let selectbtn = document.querySelector('#btn');
selectbtn.addEventListener('click',show);
function show(){
let str = '1234567890qwertyuiopasdfghjklzxcvbnm,!@#$%^&*()';
let store = ``//N4

for(let i = 0; i<6;i++){
    let random = Math.random();   //0.5---------0.03
    let ans = random * str.length;  //0.5*120=60----------------------------0.03*120=
    let afterfloor = Math.floor(ans); //60---------------------------3
    let cha = str.charAt(afterfloor); //N----------------------------------4
    store = store + cha


console.log(store);
let selecth1 = document.querySelector('#output');
selecth1.innerHTML = store
}
}
