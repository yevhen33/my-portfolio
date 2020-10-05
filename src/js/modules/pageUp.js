function pageUp() {
    const up = document.querySelector('.pageUp');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > window.innerHeight) {
            up.classList.add('active');
        } else {
            up.classList.remove('active');
        }
    });
}

export default pageUp;