// import Swiper from '../vendor/swiper';

const sliders = [
  {
    container: document.querySelector('.coaches__swiper'),
    options: {
      loop: true,

      breakpoints: {
        320: {
          initialSlide: 0,
          slidesPerView: 1,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    }
  },
  {
    container: document.querySelector('.reviews__swiper'),
    options: {
      loop: false
    }
  }
]

const initSliders = () => {
  sliders.forEach(({ container, options }) => {
    if (!container) {
      return;
    }

    new Swiper(container, {
      ...options,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
};

export {initSliders};
