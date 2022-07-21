// Accordion
const acc = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName("panel");

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.minHeight) {
        panel.style.minHeight = null;
        } else {
        panel.style.minHeight = panel.scrollHeight + "px";
        }
    });
}