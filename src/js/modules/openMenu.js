function openMenu(trigerSelector, contentSelector, closeSelector, overlaySelector) {
    const triger = document.querySelector(trigerSelector),
          menu = document.querySelector(contentSelector),
          closeMenu = document.querySelector(closeSelector),
          overlay = document.querySelector(overlaySelector),
          scroll = calcScroll();

    function close() {
        menu.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
    }

    triger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
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

    //убираем прокрутку при открытии меню

    function calcScroll() {
        let div = document.createElement('div');

        div.style.cssText = 'width: 50px; height: 50px; overflow-y: scroll; visibility: hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }
}

export default openMenu;