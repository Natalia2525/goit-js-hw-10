import './styles.css';
import './js/them.js';
import menuItems from'./js/menu.json';
import itemsTemplate from './template.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menuItems);
menuRef.insertAdjacentHTML('beforeend', markup);


