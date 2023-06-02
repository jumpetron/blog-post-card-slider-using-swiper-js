const swiper = new Swiper('.swiper', {
    // Default parameters
    loop: true,
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    // Responsive breakpoints
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      830: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },
  })