// topbar
class TopbarMenu {
    constructor() {
    this.topbarSelector = ".topbar__list--item";
    this.topbarSubmenu = ".topbar__list--submenu";
    this.items = document.querySelectorAll(this.topbarSelector);
    this.links = document.querySelectorAll(`${this.topbarSelector}--link`);
    this.gradients = document.querySelectorAll('[data-animation="gradient"]');
    this.pausedClass = "-paused";
    this.overlayClass = "-overlay";
    this.selectedClass = "-selected";
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

