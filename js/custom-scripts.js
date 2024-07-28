
    // console.log(window.scrollY);


function getStatus() {

    const counters = document.querySelectorAll('.stat-number');
    const speed = 1000;

    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-total');
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
            }else{
            counter.innerText = value;
            }
        
    }
    
    animate();
    });


};

// getStatus();


window.onscroll = function() {

    if (window.scrollY > 6400) {
        getStatus();
    }

};




//Add an inbody class to nav when scrollspy event fires
$(document).ready(function(){       
    var scroll_start = 0;
    var startChange = $('header #startChange');
    var offset = startChange.offset();
     if (startChange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $('header nav').addClass('inbody');
        } else {
           $('header nav').removeClass('inbody');
        }
    });
    
     }
 });
 


 $(function() {

    "use strict";
  
    var topoffset = 50; //variable for menu height 

    //Activate Scrollspy
    $('body').scrollspy({
        target: 'header .navbar',
        offset: topoffset
    });

    // add inbody class
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#home') {
    $('header nav').addClass('inbody');
    } else {
        $('header nav').removeClass('inbody');
    }


    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top-topoffset+2
            }, 500);
            return false;
        } //target.length
        } //click function
    }); //smooth scrolling
    
});