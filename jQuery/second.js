$(document).ready(function(){
    $('.head1').html("hi all")
    $('.head1').css("background-color","orange")

    let a=$('#head2')
    a.html("twinkle")
    a.css({
        "color":"purple",
        "background-color":"yellow",
        "padding":"20px",
        "margin":"50px",
        "text-align":"center",
        "border-radius":"50px",
        "margin-left":"150px",
        "margin-right":"150px"
    })

    let b=$('#para')
    b.css({
        "color":"blue",
    })

    let c=$('#btn1')
    c.css({
        "border-color":"pink",
        "background-color":"red"
    })

    $('#btn1').click(function(){
        $('#para').slideUp(2000)
    })
    $('#btn2').click(function(){
        $('#para').slideDown(2000)
    })

    $('#btn1').click(function(){
        $('#para').slideToggle(2000)
    })

    $('#btn1').click(function(){
        $('#para').fadeIn(2000)
    })

})
