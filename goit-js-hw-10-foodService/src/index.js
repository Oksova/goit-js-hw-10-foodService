import menuTpl from '../src/templates/menuTpl.hbs';
import menu from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuEl: document.querySelector('.js-menu'),
  bodyEl: document.querySelector('body'),
  switchEl: document.querySelector('#theme-switch-toggle'),
};

const menuContainer = refs.menuEl;
const menuMarkup = menuCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function menuCardsMarkup(menu) {
  return menuTpl(menu);
}
console.log(menuCardsMarkup);

refs.switchEl.addEventListener('change', onSwitchElClick);
refs.switchEl.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', onSwitchToggleDrag);

function onSwitchElClick() {
  if (refs.switchEl.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

function setLocalStorage(event) {
  if (refs.switchEl.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function onSwitchToggleDrag() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    refs.bodyEl.classList.add(Theme.DARK);
    refs.switchEl.checked = true;
  }
}

function setLightTheme() {
  refs.bodyEl.classList.add('theme', Theme.LIGHT);
  refs.bodyEl.classList.remove('theme', Theme.DARK);
}

function setDarkTheme() {
  refs.bodyEl.classList.add('theme', Theme.DARK);
  refs.bodyEl.classList.remove('theme', Theme.LIGHT);
}
