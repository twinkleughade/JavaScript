// localStorage.setItem("name","twinkle")
// localStorage.setItem("class","js")
// localStorage.setItem("course","python")
// localStorage.setItem("id",1)

// localStorage.getItem("name")
// console.log(name);

// localStorage.removeItem("id")

// localStorage.clear()

function run(){
    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let number=document.querySelector("#number").value

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("number",number)

    
}
