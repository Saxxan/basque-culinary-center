// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//     280: {
//         slidesPerView: 1,
//         spaceBetween: 15,
//         slidesPerGroup: 1,
//     },
//     500: {
//         slidesPerView: 2,
//         spaceBetween: 15,
//         slidesPerGroup: 2,
//     },
//     1081: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//         slidesPerGroup: 3,
//     },
//     },
// });

function initSwiper(selector, options) {
    const defaultOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        loopFillGroupWithBlank: true,
    }
    const mergedOptions = { ...defaultOptions, ...options };
    var swiper = new Swiper(selector, mergedOptions);
    return swiper;
}

// Carousel
const carouselSlider = initSwiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
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
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        1081: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
        },
    }
});

// Homepage
const homepageSlider = initSwiper('.swiper2', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
            const removeDuplicateSlide = this.loopedSlides > 0 ? 2 : 0;
            const total = this.slides.length - removeDuplicateSlide;
            const currentSlide = this.realIndex + 1;

            const currentSlideNumber = document.querySelector('.swiper-slide-current');
            const totalSlideNumber = document.querySelector('.swiper-slide-total');
            currentSlideNumber.innerHTML = currentSlide.toString().padStart(2, '0');
            totalSlideNumber.innerHTML = total.toString().padStart(2, '0');
        },
        activeIndexChange: function () {
            const removeDuplicateSlide = this.loopedSlides > 0 ? 2 : 0;
            const total = this.slides.length - removeDuplicateSlide;
            const currentSlide = this.realIndex + 1;

            const currentSlideNumber = document.querySelector('.swiper-slide-current');
            const totalSlideNumber = document.querySelector('.swiper-slide-total');
            currentSlideNumber.innerHTML = currentSlide.toString().padStart(2, '0');
            totalSlideNumber.innerHTML = total.toString().padStart(2, '0');
        }
    },
});

// Others
const othersSlider = initSwiper('.swiper3', {
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
            slidesPerView: 1,
            spaceBetween: 15,
            slidesPerGroup: 1,
        },
        1081: {
            slidesPerView: 1,
            spaceBetween: 15,
            slidesPerGroup: 1,
        },
    },
});
