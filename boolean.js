function check1(){
    let res = window.confirm("do you really want to logout");

    // console.log(res);
    if(res){
        window.location.href="login.html";
    }
    else{
        window.alert("invalid link");
    }
}
check1();