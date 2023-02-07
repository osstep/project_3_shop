$(document).ready(function(){
    $('.carousel__inner').slick({
        
        speed: 1200,
        adaptiveHeight: false,
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

document.querySelectorAll(".catalog-item__link").forEach((item) => {
    item.addEventListener('click', catalogItemHidden)
})



function catalogItemHidden(item) {
    item.preventDefault();
    let catalogItem = this.closest('.catalog-item');
    catalogItem.querySelector('.catalog-item__content').classList.toggle('catalog-item_hidden');
    catalogItem.querySelector('.catalog-item__list').classList.toggle('catalog-item_hidden');
}   
