import openMenu from './modules/openMenu';
import colorBlack from './modules/colorBlack';
import skill from './modules/skill';

window.addEventListener('DOMContentLoaded', () => {

    openMenu('.hamburger', '.menu', '.menu__close', '.menu__overlay');
    colorBlack();
    skill();
});
