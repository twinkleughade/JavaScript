let a = {
    "id" : 1, 
    "name" : "twinkle",
    "age" : 25,
    "course" : "fsd"
}

a.name;
let {name,age,id,course} = a;
console.log(name)
console.log(age);
console.log(course);


// what is difference between method & function
//when we create any outside object it is known as function
let b = {
    "sum" : function(){

    }
}
b.sum()

function show(){
    
}