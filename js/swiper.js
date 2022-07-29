var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
    280: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
    },
    500: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
    },
    1081: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
    },
    },
});
