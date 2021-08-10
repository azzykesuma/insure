// grabbing dom nodes

let hamburger = document.getElementById('hamburger')
let icon = document.getElementById('icon')


// adding event listener
hamburger.addEventListener('click',() => {
    let menuMobile = document.getElementById('menu')
    menuMobile.classList.toggle('active')
    if(menuMobile.classList.contains('active')) {
        icon.src = './images/icon-close.svg'
    } else {
        icon.src = './images/icon-hamburger.svg'
    }
    
})