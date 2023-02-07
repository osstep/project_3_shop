$(document).ready(function(){
    $('.carousel__inner').slick({
        
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 1000
              }
            },
          ]
      });
  });