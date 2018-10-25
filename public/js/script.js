/*global $*/
$(window).on('load', function(){
   $('.loader .inner').fadeOut(500, function(){
       $('.loader').fadeOut(700);
   }); 
   $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        },
    });
});

$(document).ready(function(){
    
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        animation_speed: 'slow',
        pagination: false,
    });
    
    var typed = new Typed('.typed', {
        strings: ['Web Developer.', 'Software Engineer.', 'Self Taught.'],
        typeSpeed: 70,
        loop: true,
        showCursor: false,
        startDelay: 1000
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
    
    var skillsTopOffset = $('.skillsSection').offset().top;
    
    $(window).scroll(function(){
       if(window.pageYOffset > skillsTopOffset - $(window).height() + 300){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        
       } 
    });
    
    var statsSection = $('.statsSection').offset().top;
    var countUpFinished = false;
    
    $(window).scroll(function(){
       if(!countUpFinished && window.pageYOffset > statsSection - $(window).height() + 300){
            $('.counter').each(function(){
            var element = $(this); 
            var endVal = parseInt(element.text());
            element.countup(endVal);
            countUpFinished = true;
        });   
       } 
    });
    
    $('[data-fancybox]').fancybox();
    
    $('#filters a').click(function(){
       $('#filters .current').removeClass('current');
       $(this).addClass('current');
       var selector = $(this).attr('data-filter');
       
        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            },
        });
        return false;
    });
    
    $('#navigation li a').click(function(e){
        e.preventDefault();
        var targetElement = $(this).attr('href');
        var targetPosition = $(targetElement).offset().top;
        $('html, body').animate({scrollTop: targetPosition -50}, 'slow');
    });
    
    const nav = $('#navigation');
    const navTop = nav.offset().top;
    
    $(window).on('scroll', stickyNavigation);
    function stickyNavigation(){
        const body = $('body');
        
        if($(window).scrollTop() >= navTop){
            body.css('padding-top', nav.outerHeight() + 'px');
            body.addClass('fixedNav');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }
});