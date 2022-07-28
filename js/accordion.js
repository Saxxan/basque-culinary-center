// Accordion
const acc = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");

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


// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.minHeight) {
//             panel.style.minHeight = null;
//         } else {
//             panel.style.minHeight = panel.scrollHeight + "px";
//         }
//     });
// }