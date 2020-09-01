function openMenu(trigerSelector, contentSelector, closeSelector, overlaySelector) {
    const triger = document.querySelector(trigerSelector),
          menu = document.querySelector(contentSelector),
          closeMenu = document.querySelector(closeSelector),
          overlay = document.querySelector(overlaySelector);

    function close() {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }

    triger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            close();
        }
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            close();
        }
    });
}

export default openMenu;