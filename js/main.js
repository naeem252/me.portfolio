$(document).ready(function () {
//    initial all section without home display none
    $('section').css('display','none');

    $('#home').fadeIn('slow');

//    navigation toggle
    $('.hamberger').on('click',function (e) {
        $('nav').css('left','0');
    });
    
    $('#closeNav').on('click',function () {
        $('nav').css('left','-60%');
    })

//    page

    $('nav ul').on('click',function (e) {

        if(e.target.tagName=='A'){
            $('nav ul li a').removeClass('active');

            e.target.className+=' active';
            let id=e.target.getAttribute('data-id');
           $('section').css('display','none');

           $('section#'+id).fadeIn('slow');


        }
    });
//    nav close when width is <600 and click main element

    $('main').click(function () {
        if(window.innerWidth<=600){
            setTimeout(function () {
                $('nav').css('left','-60%');
            },500)
        }
    });

});