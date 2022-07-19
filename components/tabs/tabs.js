const content = document.querySelectorAll('.tabs__content');
const tab = document.querySelectorAll('.tabs__link');
const slider = document.querySelector('.tabs__slider');

function hideTabContent() {
  content.forEach(item => {
    item.style.display = 'none';
  });
  tab.forEach(item => {
    item.classList.remove('tabs__active');
  });
}

function showTabContent(i = 0) {
  content[i].style.display = 'grid';
  tab[i].classList.add('tabs__active');
}


hideTabContent();
showTabContent();

slider.addEventListener("click", (e) => {
  const target = e.target
  if (target) {
     tab.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
  }
})