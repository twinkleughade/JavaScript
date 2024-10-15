// function dom(){
//    let a = document.querySelector('#text');
//    a.style.color = "red";
//    a.style.fontSize = "28px";

//    let b = document.querySelector('.heading');
//    b.style.color = "red";
//    b.style.fontSize = "50px";

//     console.log(a);
//     console.log(b);
// }

function image(){
    let selectdimage = document.querySelector('#img1');
    selectdimage.style.scale = "1.2";
    selectdimage.style.transition = "scale 0.5s"
    console.log(selectdimage);
}
function initial(){
let selectedimage = document.querySelector("img1");
selectedimage.style.scale = "2";
selectedimage.style.transition = "scale 0.9s"
console.log(selectedimage);
}