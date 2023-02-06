const text = document.querySelector('#text')
const farol = document.querySelector('#farol')
const fundo1 = document.querySelector('#fundo1')
const nuvem1 = document.querySelector('#nuvem1')
const nuvem2 = document.querySelector('#nuvem2')
const nuvem3 = document.querySelector('#nuvem3')
const nuvem4 = document.querySelector('#nuvem4')
const rocha = document.querySelector('#rocha')
const oceano = document.querySelector('#oceano')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // text.style.marginTop = value + 'px'
    farol.style.top = value * 1.5 + 'px'
    farol.style.left = value * 1.5 + 'px'
    nuvem1.style.top = value * - 1 + 'px'
    nuvem1.style.left = value * -1.5 + 'px'
    nuvem2.style.top = value * -1.5 + 'px'
    nuvem2.style.left = value * 1 + 'px'
    nuvem3.style.left = value * -1.5 + 'px'
    nuvem4.style.top = value * 2 + 'px'
    nuvem4.style.left = value * 1.5 + 'px'
    rocha.style.top = value * 1.5 + 'px'
    rocha.style.left = value * -1.5 + 'px'
})