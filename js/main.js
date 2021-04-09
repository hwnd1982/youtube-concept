const swiper_channel = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    spaceBetween: 40,
    slidesPerView: 6,
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },

  });
  const swiper_recommended_video = new Swiper('.recommended-video-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    spaceBetween: 80,
    slidesPerView: 3,
    navigation: {
      nextEl: '.recommended-video-button-next',
      prevEl: '.recommended-video-button-prev',
    },

  });
  const swiper_recommended_channel = new Swiper('.recommended-channel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    spaceBetween: 40,
    slidesPerView: 6,
    navigation: {
      nextEl: '.recommended-channel-button-next',
      prevEl: '.recommended-channel-button-prev',
    },

  });