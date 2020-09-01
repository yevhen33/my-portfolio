import openMenu from './modules/openMenu';
import colorBlack from './modules/colorBlack';

window.addEventListener('DOMContentLoaded', () => {

    openMenu('.hamburger', '.menu', '.menu__close', '.menu__overlay');
    colorBlack();
});
