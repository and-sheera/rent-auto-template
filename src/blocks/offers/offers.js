import Swiper from 'swiper/bundle'

export default function offers() {
  const swiperSlider = new Swiper('.offers__slider', {
    speed: 400,
    spaceBetween: 15,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    watchOverflow: true,
    slideClass: 'goods-item',
    wrapperClass: 'offers__slider-wrapper',
    breakpoints: {
      767: {
        spaceBetween: 25
      }
    }
  })
}
