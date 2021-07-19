function navMenu() {
    const menu1 = document.querySelector('.menu1');
    const menu2 = document.querySelector('.menu2');
    const menu3 = document.querySelector('.menu3');
    const menu4 = document.querySelector('.menu4');
    const menu5 = document.querySelector('.menu5');
    const menu6 = document.querySelector('.menu6');
    const menu7 = document.querySelector('.menu7');
    const menu8 = document.querySelector('.menu8');
    const menu9 = document.querySelector('.menu9');
    const menu10 = document.querySelector('.menu10');

    var menuList = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10]

    menu1.querySelector('p').addEventListener('mouseover', () => {
        menu1.querySelector('div').classList.toggle('underline_off');
    })
    menu2.querySelector('p').addEventListener('mouseover', () => {
        menu2.querySelector('div').classList.toggle('underline_off');
    })
    menu3.querySelector('p').addEventListener('mouseover', () => {
        menu3.querySelector('div').classList.toggle('underline_off');
    })
    menu4.querySelector('p').addEventListener('mouseover', () => {
        menu4.querySelector('div').classList.toggle('underline_off');
    })
    menu5.querySelector('p').addEventListener('mouseover', () => {
        menu5.querySelector('div').classList.toggle('underline_off');
    })
    menu6.querySelector('p').addEventListener('mouseover', () => {
        menu6.querySelector('div').classList.toggle('underline_off');
    })
    menu7.querySelector('p').addEventListener('mouseover', () => {
        menu7.querySelector('div').classList.toggle('underline_off');
    })
    menu8.querySelector('p').addEventListener('mouseover', () => {
        menu8.querySelector('div').classList.toggle('underline_off');
    })
    menu9.querySelector('p').addEventListener('mouseover', () => {
        menu9.querySelector('div').classList.toggle('underline_off');
    })
    menu10.querySelector('p').addEventListener('mouseover', () => {
        menu10.querySelector('div').classList.toggle('underline_off');
    })


    menu1.querySelector('p').addEventListener('mouseleave', () => {
        menu1.querySelector('div').classList.toggle('underline_off');
    })
    menu2.querySelector('p').addEventListener('mouseleave', () => {
        menu2.querySelector('div').classList.toggle('underline_off');
    })
    menu3.querySelector('p').addEventListener('mouseleave', () => {
        menu3.querySelector('div').classList.toggle('underline_off');
    })
    menu4.querySelector('p').addEventListener('mouseleave', () => {
        menu4.querySelector('div').classList.toggle('underline_off');
    })
    menu5.querySelector('p').addEventListener('mouseleave', () => {
        menu5.querySelector('div').classList.toggle('underline_off');
    })
    menu6.querySelector('p').addEventListener('mouseleave', () => {
        menu6.querySelector('div').classList.toggle('underline_off');
    })
    menu7.querySelector('p').addEventListener('mouseleave', () => {
        menu7.querySelector('div').classList.toggle('underline_off');
    })
    menu8.querySelector('p').addEventListener('mouseleave', () => {
        menu8.querySelector('div').classList.toggle('underline_off');
    })
    menu9.querySelector('p').addEventListener('mouseleave', () => {
        menu9.querySelector('div').classList.toggle('underline_off');
    })
    menu10.querySelector('p').addEventListener('mouseleave', () => {
        menu10.querySelector('div').classList.toggle('underline_off');
    })

}
navMenu();
    
    

