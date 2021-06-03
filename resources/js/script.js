$(document).ready(function(){
    // sticky navigation 
    $(".js-section-feature").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky animate__animated animate__headShake animate__delay-1s");
        }
        else{
            $("nav").removeClass("sticky");
        }
    },{
        offset:"80px"
    })
    // Scroll on button 
    $(".js-customer").click(function(){
        $("html , body").animate({scrollTop:$(".js-client").offset().top},1000)
    });

    $(".js-show-more").click(function(){
        $("html , body").animate({scrollTop:$(".js-meals").offset().top},1000)
    });
    // -------------------------------------------
    //--------------- smooth scroll  -------------
    // -------------------------------------------
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
    });
    
    // -------------------------------------------
    //----------- animation on scroll  -----------
    // -------------------------------------------
    $('.js-animation').waypoint(function(direction){
        $('.js-animation').addClass('animate__animated animate__fadeIn');    
    },{
        offset:'50%'
    })
    // application
    $('.js-animation0').waypoint(function(direction){
        $('.js-animation0').addClass('animate__animated animate__fadeInUp animate__delay-1s')
    },{
        offset: '65%'
    })
    // step
    $('.js-animation2').waypoint(function(direction){
        $('.js-animation2').addClass('animate__animated animate__fadeInRight')
    },{
        offset: '70%'
    })
    // city 
    $('.js-animation-3').waypoint(function(direction){
        $('.js-animation-3').addClass('animate__animated animate__pulse')
    },{
        offset:'40%'
    })
    // bars

    $('.bars').click(function(){
        var nav = $('.links');
        nav.slideToggle(350)
    })

});