import openMenu from './modules/openMenu';
import colorBlack from './modules/colorBlack';
import skill from './modules/skill';
import pageUp from './modules/pageUp';
import scroll from './modules/scroll';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    openMenu('.hamburger', '.menu', '.menu__close', '.menu__overlay', 'nav .menu__link');
    colorBlack();
    skill();
    pageUp();
    scroll();
    forms();
});
