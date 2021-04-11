const swiper_channel = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1500: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      760: {
        slidesPerView: 2,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    }

  });
  const swiper_recommended_video = new Swiper('.recommended-video-slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,

    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 2,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-video-button-next',
      prevEl: '.recommended-video-button-prev',
    },

  });
  const swiper_recommended_channel = new Swiper('.recommended-channel-slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1500: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      760: {
        slidesPerView: 2,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-channel-button-next',
      prevEl: '.recommended-channel-button-prev',
    },
  });
  const searchBtn = document.querySelector('.mobile-search');
  const mobileSearch = document.querySelector ('.input-group');
  searchBtn.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open');
  });

  if (document.documentElement.scrollWidth <= 640) {
    swiper_channel.destroy();
    swiper_recommended_video.destroy();
    swiper_recommended_channel.destroy();
  }