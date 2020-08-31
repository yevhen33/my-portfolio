function openMenu(trigerSelector, contentSelector, closeSelector) {
    const triger = document.querySelector(trigerSelector),
          menu = document.querySelector(contentSelector),
          closeMenu = document.querySelector(closeSelector);

    triger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}

export default openMenu;