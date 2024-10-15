// function class3(){
//     let a = parseInt(window.prompt("Enter number 1"));
//     let b = parseInt(window.prompt("Enter number 2"));
// window.alert(a+b);
// }

// class3();


    // var a = "p35 js";
    // console.log(a);
    // var a = 89;
    // console.log(a);


    // let b = "p35 js";
    // b = 89;
    // console.log(b);

    // const c = "p35 js"
    // console.log(c);

    function class3(){
    let num1 = parseInt(window.prompt("Enter number 1"));
    console.log(num1)
    console.log(typeof(num1))

    let num2 = parseInt(window.prompt("Enter number 2"));
    console.log(num2);
    console.log(typeof(num2))

    let num3 = parseInt(window.prompt("Enter number 3"));
    console.log(num3);
    console.log(typeof(num3))

    if((num1>num2 && num1>num3)){
    window.alert("num 1 is greater" + num1)
    }
    else if(num2>num3 && num2>num1){
    window.alert("num 2 is greater" + num2);
    }
    else{
        window.alert("num 3 is greater" + num3);
    }

}
class3();



// function evenodd(){
//     let num = parseInt(window.prompt("enter number "));

//     if(num % 2 == 0)
//     {
//         window.alert("number is even")
//     }
//     else{
//         window.alert("number is odd")
//     }
// }
// evenodd();
