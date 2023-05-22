const sliders = [
  {
    container: document.querySelector('.coaches__swiper'),
    options: {
      loop: true,
      // loopedSlides: 1,

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
window.sliders = [];

const initSliders = () => {
  sliders.forEach(({container, options}) => {
    if (!container) {
      return;
    }

    window.sliders.push(new window.Swiper(container, options));
    if (!options.loop) {
      return;
    }
    const observeSlide = (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.visiblity = 'visible';
      } else {
        entry.target.style.visiblity = 'hidden';
      }
    };

    const observer = new IntersectionObserver ((entries) => entries.forEach(observeSlide), {
      root: container,
    });
    container.querySelectorAll('[data-swiper-slide-index]').forEach((slide) => observer.observe(slide));
  });
};

export {initSliders};
