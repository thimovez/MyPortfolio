const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlayElement = document.querySelector('.menu__overlay'),
    menuElement = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.work__ratings-counter'),
    lines = document.querySelectorAll('.work__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// when I click on "overlay" - is disappear

overlayElement.addEventListener('click', () => {
    menu.classList.remove('active');
});


menuElement.addEventListener('click', () => {
    menu.classList.remove('active');
});