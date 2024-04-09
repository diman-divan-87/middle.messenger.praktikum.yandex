import Handlebars from 'handlebars';

import './chat-header.css';
export { default as ChatHeader } from './chat-header.hbs?raw';

import ava from '../../../../src/assets/01.jpg'
import menu from '../../../../src/assets/icons/menu.svg'

Handlebars.registerHelper("img_ava", function () {
    return ava;
});

Handlebars.registerHelper("img_menu", function () {
    return menu;
});

