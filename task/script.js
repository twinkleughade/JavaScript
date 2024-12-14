var a = document.getElementById("loginbtn");
var b = document.getElementById("registerbtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login(){
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white_btn";
    b.className ="btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register(){
    x.style.left ="-510px";
    y.style.right ="5px";
    a.className = "btn";
    b.className +=" white_btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}