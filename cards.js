let arrofobj = [
    {
        "id" : 1,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 2,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 3,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 4,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 5,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 6,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 7,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 8,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 9,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    },
    {
        "id" : 10,
        "imageurl" : "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
        "pname" : "shoes",
        "bname" : "nike",
        "pprice" : 999
    }
]

let selectdiv = document.querySelector('#ans');
selectdiv.innerHTML = arrofobj.map((card)=>`
<div style="margin: 20px; box-shadow: 0px 0px 10px 2px black">
        <img  width="200px"  height="200px" src="${card.imageurl}" alt="">
    <div>${card.bname}</div>
    <div>${card.pname}</div>
    <div>${card.pprice}</div>
    <div>add to cart</div>
    <div>buy now</div>
</div>
`).join(" ")


