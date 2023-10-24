$(document).ready(function () {
    $('.container300x50').mouseenter(function(){
        $(this).hide();
        $('.big_banner728x540').show();
    });
    $('.big_banner728x540').mouseleave(function(){
        $(this).hide();
        $('.container300x50').show();
    })
});