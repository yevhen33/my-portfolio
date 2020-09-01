function colorBlack() {
    const text = document.querySelector('.sidepanel__text'),
          divider = document.querySelector('.sidepanel__divider');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > (document.documentElement.clientHeight)/3) {
            text.classList.add('black');
            divider.classList.add('black');
        } else {
            text.classList.remove('black');
            divider.classList.remove('black');
        }
    });
}

export default colorBlack;