
// Hero swiper
const swiperHero = new Swiper('.swiper-hero', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-hero__pagination',
      clickable: true
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

// Articles swiper
const swiperArticles = new Swiper('.swiper-articles', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   breakpoints: {
      768: {
         slidesPerView: 1
      }
   },
   

   // If we need pagination
   pagination: {
      el: '.swiper-articles-pagination',
      clickable: true
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-articles-button__next',
      prevEl: '.swiper-articles-button__prev',
   },
   slidesPerView: 2,
   spaceBetween: 20,
   loop: false,
   simulateTouch: false,

});


// Product swiper
const swiperThumbs = new Swiper('.swiper-thumbs', {
   direction: 'vertical',
   spaceBetween: 10,
   slidesPerView: 5,
   freeMode: true,
   watchSlidesProgress: true,
})

const swiperProduct = new Swiper('.swiper-product', {
   speed: 1,
   spaceBetween: 10,
   pagination: {
      el: '.swiper-pagination-product',
   },
   thumbs: {
      swiper: swiperThumbs,
   }

})



// swiperThumbs.controller.control = swiperProduct;
// swiperProduct.controller.control = swiperThumbs



