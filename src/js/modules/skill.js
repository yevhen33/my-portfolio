const skill = () => {
    const counters = document.querySelectorAll('.skills__counter__item-interest'),
          lines = document.querySelectorAll('.skills__counter__item-body span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
};

export default skill;