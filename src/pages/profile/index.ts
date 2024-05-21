import Handlebars from 'handlebars';
import './profile.css'

export { default as ProfileView } from './profile-view.hbs?raw';
export { default as ProfileChange } from './profile-change.hbs?raw';
export { default as ProfileResetPass } from './profile-reset-pass.hbs?raw';

import ava from '../../../src/assets/01.jpg'

Handlebars.registerHelper("img_ava", function () {
    return [{img: ava}];
});
