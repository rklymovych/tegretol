$(document).ready(function () {
    $('.cont728x90').mouseenter(function(){
        $(this).hide();
        $('.big_banner728x540').show();
    });
    $('.big_banner728x540').mouseleave(function(){
        $(this).hide();
        $('.cont728x90').show();
    })
});