// let ob = {
//     name:"twinkle",
//     age:26,
//     contact:123
// }
// console.log(ob.age)

// for( k in ob){
//     console.log(k) //for getting key 
// }

// for( v in ob){
//     console.log(ob[v])   //for getting value
// }
function run(){
let obj = {
    name : document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    number: document.querySelector('#number').value

}

localStorage.setItem("data",JSON.stringify(obj))
}

let m = JSON.parse(localStorage.getItem("data"))
console.log(m);

// let m = JSON.parse(localStorage.getItem("data"))
// console.log(m.email);


let myname = document.querySelector('#myname')
let myemail = document.querySelector('#myemail')
let mynumber = document.querySelector('#mynumber')


myname.innerHTML = m.name 
myemail.innerHTML =m.email
mynumber.innerHTML=m.number
