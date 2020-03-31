$(document).ready(function () {
//    navigation toggle
    $('.hamberger').on('click',function (e) {
        $('nav').css('left','0');
    });
    
    $('#closeNav').on('click',function () {
        $('nav').css('left','-60%');
    })

});