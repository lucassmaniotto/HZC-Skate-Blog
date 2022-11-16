const buttonMenu = document.querySelector('.header__menu');
const menu = document.querySelector('.menu-left');

buttonMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-left--active');
});