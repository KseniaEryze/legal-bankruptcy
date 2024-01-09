
const burger = document.querySelector('.header_burger');
const close = document.querySelector('.header_nav_close');
const menu = document.querySelector('.header_menu');

function toggleMenu() {
burger.classList.toggle('active');
close.classList.toggle('active');
menu.classList.toggle('header_menu_active');
}

burger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);
