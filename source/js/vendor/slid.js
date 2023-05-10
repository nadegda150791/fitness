const slid = document.querySelector('.coaches__swiper');
const reviewsSlid = document.querySelector('.reviews__swiper');

const initSwiper = () => {
  if (slid) {
    (() =>
      new Swiper('.coaches__swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

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
      })
    )();
  }
};


const initTwoSwiper = () => {
  if (reviewsSlid) {
    (() =>
      new Swiper('.reviews__swiper', {
        rection: 'horizontal',
        loop: false,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    )();
  }
};


export {initSwiper, initTwoSwiper};
