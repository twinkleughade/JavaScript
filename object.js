// object = collecttion of key:value pair
//array

let obj ={
    "name" : "twinkle",
    "age" : 26,
}
console.log(obj.age);

let obj1 = {
    name : "twinkle",
    age : 24
};
console.log(obj1.name);

let document1 = {
    "queryselector" : function(arg){
        console.log("hello")
    },
    "getElementById" : function(){
        document1.queryselector('#id')
    }
   
}

let object = [
    {
        "id" : 1,
        "name" : "twinkle",
        "age" :26,
        "mobnumber" :  6267002715
    },
    {
        "id" : 2,
        "name" : "thakretwinkle",
        "age" :24,
        "course" : "python",
        "mobnumber" :  6267002714
        
    }
]
console.log(object[2].mobnumber)
console.log(object[1].age)
console.log(object[2].course)



//map - loop & innerhtml (high order methods) call back

let object1 =[
    {
        "id" : 1,
        "name" : "twinkle",
        "age" :26,
        "mobnumber" :  6267002715
    },
    {
        "id" : 2,
        "name" : "thakretwinkle",
        "age" :24,
        "mobnumber" :  6267002714,
        "course" : "python"
    }
]
let selecttable = document.querySelector('#output');
selecttable.innerHTML = obj.map((e)=>`
<tr>
<td>${e.id}</td>
<td><img width="100" src="${e.img}"></td>
<td>${e.name}</td>
<td>${e.course}</td>
<td>${e.mobnumber}</td>
</tr>
`).join(" ")


