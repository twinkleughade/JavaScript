//  async function fet(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/comments")
//     let a = await res.json()
//     console.log(a)
//  } 

//  fet()

async function fet(){
    let res = await fetch("https://jsonplaceholder.typicode.com/comments")
    let a = await res.json()
    let ans = a.map((e)=>`
    <h1> ${e.id}</h1>
    <h1> ${e.email}</h1>
    `).join("")

    document.querySelector('#demo').innerHTML = ans
 } 

 fet()