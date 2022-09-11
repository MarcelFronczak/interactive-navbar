const triggers = document.querySelectorAll('.cool > li');
const dropdown = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function enter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 110);
    dropdown.classList.add('open');

    const background = this.querySelector('.dropdown');
    const data = background.getBoundingClientRect();
    const navData = nav.getBoundingClientRect();

    const dataArr = {
        width: data.width,
        height: data.height,
        top: data.top - navData.top,
        left: data.left - navData.left
    };
    
    dropdown.style.setProperty('width', `${dataArr.width}px`);
    dropdown.style.setProperty('height', `${dataArr.height}px`);
    dropdown.style.setProperty('top', `${dataArr.top}px`);
    dropdown.style.setProperty('left', `${dataArr.left}px`);
}

function leave() {
    this.classList.remove('trigger-enter-active', 'trigger-enter');
    dropdown.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', enter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', leave)); 



