$(function(){
    'use_strict';
    $('.classic-list li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
    $('.menu-toggle').click(function(){
        $('nav ul').toggleClass('visible');
    });
});
