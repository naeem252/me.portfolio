$(document).ready(function () {
//    initial all section without home display none
    $('section').css('display', 'none');

    $('#home').fadeIn('slow');

//    navigation toggle
    $('.hamberger').on('click', function (e) {
        $('nav').css('left', '0');
    });

    $('#closeNav').on('click', function () {
        $('nav').css('left', '-60%');
    });

//    page

    $('nav ul').on('click', function (e) {

        if (e.target.tagName == 'A') {
            $('nav ul li a').parent().removeClass('active');

            e.target.parentNode.className += ' active';
            let id = e.target.getAttribute('data-id');
            $('section').css('display', 'none');

            $('section#' + id).fadeIn('slow');
            //prograss start
            if(id==='skills'){
                progressBar();
            }

        }
    });
//    nav close when width is <600 and click main element

    $('main').click(function () {
        if (window.innerWidth <= 600) {
            setTimeout(function () {
                $('nav').css('left', '-60%');
            }, 500)
        }
    });




});//close ready function

function progressBar() {
    let weight;
    let thickness=6;

    console.log(window.innerWidth);
    if(window.innerWidth<=768 && window.innerWidth>600){
        weight=120;
    }else if(window.innerWidth<=600){
        weight=90;
        thickness=3;
    }
    else{
        weight=170;
        thickness=10;
    }

    $('.circle.html').circleProgress({

        value: .9,
        thickness: thickness,
        fill: {

            gradient: ["#22c1c3","#a5c97e","#fdbb2d"]


        },
        size: weight,
        emptyFill: 'rgba(0,0,0,0.4)',
        startAngle: -1.5708,
        animation: {
            duration: 2000,
        }

    }).on('circle-animation-progress', function (event, progress, value) {
        $(this).find('strong').html(Math.round((value * 100) * progress) + '<i>%</i>');
    }); //for html


    $('.circle.css').circleProgress({

        value: .85,
        thickness: thickness,
        fill: {

            gradient: ["#91c6b3","#b288c8","#e52dfd"]

        },
        size: weight,
        emptyFill: 'rgba(0,0,0,0.4)',
        startAngle: -1.5708,
        animation: {
            duration: 2000,
        }

    }).on('circle-animation-progress', function (event, progress, value) {
        $(this).find('strong').html(Math.round((value * 100) * progress) + '<i>%</i>');
    }); //for css

    $('.circle.javascript').circleProgress({

        value: .75,
        thickness: thickness,
        fill: {

            gradient: ["#f564f0","#98629d","#5d5d79","#2df4fd"]

        },
        size: weight,
        emptyFill: 'rgba(0,0,0,0.4)',
        startAngle: -1.5708,
        animation: {
            duration: 2000,
        }

    }).on('circle-animation-progress', function (event, progress, value) {
        $(this).find('strong').html(Math.round((value * 100) * progress) + '<i>%</i>');
    }); //for javascript

    $('.circle.php').circleProgress({

        value: .70,
        thickness: thickness,
        fill: {

            gradient: ["#b7f564","#98629d","#5b5d79","#2d4f8c"]

        },
        size: weight,
        emptyFill: 'rgba(0,0,0,0.4)',
        startAngle: -1.5708,
        animation: {
            duration: 2000,
        }

    }).on('circle-animation-progress', function (event, progress, value) {
        $(this).find('strong').html(Math.round((value * 100) * progress) + '<i>%</i>');
    }); //for PHP

    $('.circle.laravel').circleProgress({

        value: .56,
        thickness: thickness,
        fill: {

            gradient: ["#d1620a","#638c2d"]

        },
        size: weight,
        emptyFill: 'rgba(0,0,0,0.4)',
        startAngle: -1.5708,
        animation: {
            duration: 2000,
        }

    }).on('circle-animation-progress', function (event, progress, value) {
        $(this).find('strong').html(Math.round((value * 100) * progress) + '<i>%</i>');
    }); //for laravel

    $('.circle.wordpress').circleProgress({

        value: .60,
        thickness: thickness,
        fill: {

            gradient: ["#d10a3f","#5c5d20"]

        },
        size: weight,
        emptyFill: 'rgba(0,0,0,0.4)',
        startAngle: -1.5708,
        animation: {
            duration: 2000,
        }

    }).on('circle-animation-progress', function (event, progress, value) {
        $(this).find('strong').html(Math.round((value * 100) * progress) + '<i>%</i>');
    });//for wordpress


}