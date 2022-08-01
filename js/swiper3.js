var swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    280: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
    },
    500: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 1,
    },
    1081: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 1,
    },
  },
});
  