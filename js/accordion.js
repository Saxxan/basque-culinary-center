// Accordion
const acc = document.querySelectorAll(".accordion");
const acci = document.querySelectorAll(".accordion__index");
const panel = document.querySelectorAll(".panel");
// accordion
acc.forEach((item, key) => {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
        if(panel[key].classList.contains("visible")) {
            panel[key].classList.remove("visible");
        } else {
            panel[key].classList.add("visible");
        }
    });
})
// accordion menu index
acci.forEach((item, key) => {
    item.addEventListener("click", function () {
        item.classList.toggle("active__index");
        if(panel[key].classList.contains("visible")) {
            panel[key].classList.remove("visible");
        } else {
            panel[key].classList.add("visible");
        }
    });
})