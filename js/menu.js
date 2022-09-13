// menu-main
// const toggle = document.querySelector(".toggle");
// const menu = document.querySelector(".menu");
// const items = document.querySelectorAll(".item");

// const burger = document.querySelector(".burger");
// const closed = document.querySelector(".closed");

// menu.addEventListener('click', hide);

// burger.addEventListener('mouseover', alert("hola"));

// /* Toggle mobile menu */
// function toggleMenu() {
//   if (menu.classList.contains("active")) {
//     menu.classList.remove("active");
//     toggle.querySelector("a").className.add = ".burger";
//   } else {
//     menu.classList.add("active");
//     toggle.querySelector("a").className.add = ".closed";
//   }
// }

/* Activate Submenu */
// function toggleItem() {
//   if (this.classList.contains("submenu-active")) {
//     this.classList.remove("submenu-active");
//   } else if (menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active");
//     this.classList.add("submenu-active");
//   } else {
//     this.classList.add("submenu-active");
//   }
// }

// /* Close Submenu From Anywhere */
// function closeSubmenu(e) {
//   if (menu.querySelector(".submenu-active")) {
//     let isClickInside = menu
//       .querySelector(".submenu-active")
//       .contains(e.target);

//     if (!isClickInside && menu.querySelector(".submenu-active")) {
//       menu.querySelector(".submenu-active").classList.remove("submenu-active");
//     }
//   }
// }
/* Event Listeners */
// toggle.addEventListener("click", toggleMenu, false);
// for (let item of items) {
//   if (item.querySelector(".submenu")) {
//     item.addEventListener("click", toggleItem, false);
//   }
//   item.addEventListener("keypress", toggleItem, false);
// }
// document.addEventListener("click", closeSubmenu, false);

// Topbar
class TopbarMenu {
    constructor() {
        this.topbarSelector = ".topbar__list--item";
        this.topbarSubmenu = ".topbar__list--submenu";
        this.items = document.querySelectorAll(this.topbarSelector);
        this.links = document.querySelectorAll(`${this.topbarSelector}--link`);
        this.gradients = document.querySelectorAll('[data-animation="gradient"]');
        this.pausedClass = "paused";
        this.overlayClass = "overlay";
        this.selectedClass = "selected";
        }
    
    init() {
        this.attachEvents();
        this.attachCloseMenu();
    }
    
    attachEvents() {
        this.links.forEach((link) => {
            link.addEventListener("click", this.toggleMenu.bind(this));
        });
    }
    
    toggleMenu(e) {
        const current = e.target;
        const parent = current.closest(this.topbarSelector);
        if (parent.querySelector(this.topbarSubmenu)) {
            current.closest(this.topbarSelector).classList.toggle(this.selectedClass);
            this.toggleGradient();
            document.body.classList.toggle(this.overlayClass);
        }
    }
    
    toggleGradient() {
        this.gradients.forEach((gradient) => {
            gradient.classList.toggle(this.pausedClass);
        });
    }
    
    attachCloseMenu() {
        const _this = this;
        document.body.addEventListener("click", (e) => {
            if (e.target.classList.contains(_this.overlayClass)) {
            e.target.classList.remove(_this.overlayClass);
            _this.toggleGradient();
            _this.items.forEach((item) => {
                item.classList.remove(_this.selectedClass);
            });
            }
        });
    }
}
    
// Init Menu
const topbarMenu = new TopbarMenu();
topbarMenu.init();

