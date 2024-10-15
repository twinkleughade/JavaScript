// setTimeout(run,3000);

// function run(){
//     console.log("called")
// }

// setTimeout(()=>{
//     console.log("second time called");
// },5000)

function onload(){
    setTimeout(show,3000)

    function show(){
        let selectwebsite = document.querySelector('#website');
        selectwebsite.style.display = "block";

        let selectimg = document.querySelector('#img');
        selectimg.style.display = "none";
    }
}