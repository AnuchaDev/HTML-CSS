jQuery(document).ready(function(){
     
    "use strict"
     $('.slider').ripples({
       dropRadius: 11,
       perturbance: 0.01,
        
     });
   
      $(".text").typed({
         strings:["<strong>I love</strong><strong class='primary'> codings.</strong>","<strong>and love</strong><strong class='primary'> Javascript!.</strong>",
         "<strong>i love</strong><strong class='primary'> Jquery.</strong>"],
          typespeed:0,
          loop:true
          
      });
      
     $(window).scroll(function(){
        const top = $(window).scrollTop();
         if(top>=10){
           $("nav").addClass('secondary'); 
         }
         
         else{ 
             if($("nav").hasClass('secondary')){
                 $("nav").removeClass('secondary'); 
             }
            }
     });

     $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
      enabled: true
      }
      // other options
    });

   $('#team-members').owlCarousel({
      items:3,autoplay:true,smartSpeed:700,loop:true,autoplayHoverPause:true,
      responsive:{
        0:{
          item:1
        },
        480:{
          item:2
        },
        768:{
          item:3
        }
      }
   });
  

});