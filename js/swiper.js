//mvのスライダー設定
const mvSwiper = new Swiper('.mv .swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
});