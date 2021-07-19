const burger = () => {
    const head = document.querySelector('.head');
    const bMenu = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const intro = document.querySelector('.intro');

    bMenu.addEventListener('click', () => {
        nav.classList.toggle('navActive');
        intro.classList.toggle('noDisplay');
        head.classList.toggle('blackb');
        bMenu.classList.toggle('close');
    })
}
burger();