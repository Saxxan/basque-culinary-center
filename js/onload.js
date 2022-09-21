import { hideTabContent } from "./function.js";
import { test } from "./function.js";
import { topbarMenu } from "./menu.js";
// import { initSwiper } from "./swiper.js";

// onload
const body = document.body;
body.onload = function(){all()};

function all() {
    hideTabContent();
    test();
    topbarMenu.init();
    // initSwiper();
}

