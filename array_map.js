// let arr = [45,56,34,9,78];
// let newarr = arr.map((items)=>{return items*2});
// console.log(newarr);

// let answer = [45,56,34,9,78];
// let newarr = answer.map((items)=>{return items+2});
// console.log(newarr);


function run(){
  let arr = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s',
    'https://img.freepik.com/premium-photo/beautiful-butterfly-images-brighten-your-day_1199394-94530.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46Rfun_2KU_33Gch3WsolAqve8O2o2W4aVx9aSPKObPnmog9K8KkLbZ3B8gGymXTMVtU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgVmd-O8g2e1P3NwWDuLGlWFVkjOzxbRQ0lCItRdayx_AW8B_IQWVrqoLeCPh_jzhgA0&usqp=CAU'
  ];

  let output = document.querySelector('#answer');
  output.innerHTML = arr.map((imgurl)=>`
  <img style="width:300px; height:300px; margin:50px 0 0 10px; border:2px solid black"  src="${imgurl}"  alt="not find">
  `).join(" ")
}