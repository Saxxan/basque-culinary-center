const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

const burger = document.querySelector(".burger");
const closed = document.querySelector(".closed");

menu.addEventListener('click', hide);

burger.addEventListener('mouseover', alert("hola"));

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").className.add = ".burger";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").className.add = ".closed";
  }
}

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