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

      navigation: {
        nextEl: '.coaches .swiper-button-next',
        prevEl: '.coaches .swiper-button-prev',
      },
    },
  },
  {
    container: document.querySelector('.reviews__swiper'),
    options: {
      loop: false,

      navigation: {
        nextEl: '.reviews .swiper-button-next',
        prevEl: '.reviews .swiper-button-prev',
      },
    },
  }
];

const initSliders = () => {
  sliders.forEach(({container, options}) => {
    if (!container) {
      return;
    }

    new Swiper(container, options);
  });
};

export {initSliders};
