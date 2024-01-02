$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.hamburger').toggleClass('active');

        if ($('.hamburger').hasClass('active')) {
            $('.side-bar').css('transform', 'translateX(0)');
            $('body').css('overflow', 'hidden');
        } else {
            $('.side-bar').css('transform', 'translateX(100%)');
            $('body').css('overflow', 'scroll');
        }
    });
});