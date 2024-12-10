function ranimg(){
let imageurls = [
    "https://assets.ajio.com/medias/sys_master/root/20230927/sZ5P/6514157cddf779151908421d/-473Wx593H-466643036-peach-MODEL.jpg",
    "https://5.imimg.com/data5/ANDROID/Default/2022/2/MJ/AO/ZH/73718625/product-jpeg-500x500.jpg",
    "https://5.imimg.com/data5/ANDROID/Default/2022/2/MJ/AO/ZH/73718625/product-jpeg-500x500.jpg",
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/9/l/f/-original-imaggbw33guzvvg5.jpeg?q=90&crop=false"
]
let ran = Math.random();
let multiply = ran * imageurls.length;
let flooredval = Math.floor(multiply);
let selectimg = document.querySelector('#im');
selectimg.src = imageurls[flooredval];
}