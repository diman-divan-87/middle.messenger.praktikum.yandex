import Handlebars from 'handlebars';
import './top-container.css';
export { default as TopContainer } from './top-container.hbs?raw';

import arrow from '../../../assets/icons/arrow.svg'

Handlebars.registerHelper("img_src", function () {
  return arrow;
});
