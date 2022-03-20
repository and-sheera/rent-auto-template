import Swiper from 'swiper/bundle'

export default function sliderInit() {
  const swiperSlider = new Swiper('.slider .swiper', {
    speed: 400,
    spaceBetween: 15,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      767: {
        spaceBetween: 25
      }
    }
  })
}
