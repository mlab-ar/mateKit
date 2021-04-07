$(document).ready(function(){
    // Toggle menu animation
    $('.menu-toggle').on('click', function(){
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });

    // Post slider animation
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

});