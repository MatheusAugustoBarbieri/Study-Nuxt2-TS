import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      swiperOption: {
        centeredSlidesBounds: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 1,
        breakpoints: {
          1440: {
            centeredSlides: true,
            spaceBetween: -20,
            slidesPerView: 3,
          },
          1280: {
            centeredSlides: true,
            spaceBetween: 0,
            slidesPerView: 3,
          },
          1024: {
            centeredSlides: true,
            spaceBetween: 80,
            slidesPerView: 3,
          },
          768: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: -20,
          },
          425: {
            spaceBetween: -30,
            slidesPerView: 1.1,
          },
          330: {
            spaceBetween: -20,
            slidesPerView: 1.05,
          },
          320: {
            spaceBetween: -10,
            slidesPerView: 1.02,
          },
        },

        pagination: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
})
