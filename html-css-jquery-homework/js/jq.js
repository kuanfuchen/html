$(document).ready(function () {
    $('.production').click(function (e) {
        e.preventDefault();
        $('.list li').toggleClass('active');
        $('.list li').slideToggle();
    });

    $(window).on('load', function () {
        $('#slider').nivoSlider();
    });
    $('.arrow a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });
});