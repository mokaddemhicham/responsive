$(function(){
    'use_strict';
    $('.classic-list li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
    $('.menu-toggle').click(function(){
        $('nav ul').toggleClass('visible-menu');
        $('.menu-toggle span:first-of-type').toggleClass('span1');
        $('.menu-toggle span:nth-of-type(2)').toggleClass('span2');
        $('.menu-toggle span:last-of-type').toggleClass('span3');
    });
});
