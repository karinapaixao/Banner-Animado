
$(document).ready(function () {
        setTimeout(function () {
            $('#banner').addClass('modal');
        }, 800);
        setTimeout(function () {
            $('#banner').removeClass('modal')
            $('#banner').addClass('modal2');
        }, 1600);
        setTimeout(function () {
            $('#banner').removeClass('modal2')
            $('#banner').addClass('modal3');
        }, 2400);
        setTimeout(function () {
            $('#banner').removeClass('modal3')
            $('#banner').addClass('modal4');
        }, 3200);
        setTimeout(function () {
            $('#banner').removeClass('modal4')
            $('#banner').addClass('modal');
        }, 4000);
        setTimeout(function () {
            $('#banner').removeClass('modal')
            $('#banner').addClass('modal5');
        }, 4800);
        setTimeout(function () {
            $('#banner').removeClass('modal5')
            $('#banner').addClass('modal6');
        }, 5600);
        setTimeout(function () {
            $('#banner').removeClass('modal6')
            $('#banner').addClass('modal');
        }, 6400);
        setTimeout(function () {
            $('#banner').removeClass('modal')
            $('#banner').addClass('modal5');
        }, 7200);
        setTimeout(function () {
            $('#banner').removeClass('modal5')
            $('#banner').addClass('modal7')
        }, 8000);
});


// $(document).ready(function () {
//     function playslider(){
//             $('.img1').fadeIn(800).delay(800).fadeOut(800);
//             $('.img2').delay(1600).fadeIn(800).delay(800).fadeOut(800);
//     }   
//     playslider();
//     });