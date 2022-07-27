var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 5,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next--primary",
        prevEl: ".swiper-button-prev--primary",
    },
    breakpoints: {
    280: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    1280: {
        slidesPerView: 5,
        spaceBetween: 15,
    },
    },
});