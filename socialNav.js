const socialNav = () => {
    const social1 = document.querySelector('.footer_menu1');
    const social2 = document.querySelector('.footer_menu2');
    const social3 = document.querySelector('.footer_menu3');
    const social4 = document.querySelector('.footer_menu4');

    social1.querySelector('img').addEventListener('mouseover', () => {
        social1.querySelector('div').classList.toggle('underline_off');
    })
    social1.querySelector('img').addEventListener('mouseleave', () => {
        social1.querySelector('div').classList.toggle('underline_off');
    })

    social2.querySelector('img').addEventListener('mouseover', () => {
        social2.querySelector('div').classList.toggle('underline_off');
    })
    social2.querySelector('img').addEventListener('mouseleave', () => {
        social2.querySelector('div').classList.toggle('underline_off');
    })

    social3.querySelector('img').addEventListener('mouseover', () => {
        social3.querySelector('div').classList.toggle('underline_off');
    })
    social3.querySelector('img').addEventListener('mouseleave', () => {
        social3.querySelector('div').classList.toggle('underline_off');
    })

    social4.querySelector('img').addEventListener('mouseover', () => {
        social4.querySelector('div').classList.toggle('underline_off');
    })
    social4.querySelector('img').addEventListener('mouseleave', () => {
        social4.querySelector('div').classList.toggle('underline_off');
    })
}
socialNav();