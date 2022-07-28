var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    280: {
        slidesPerView: 1,
        spaceBetween: 15,
    },
    500: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    1081: {
        slidesPerView: 3,
        spaceBetween: 24,
    },
    },
});
