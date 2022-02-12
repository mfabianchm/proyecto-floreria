

//SCRIPT PARA NAV Y HERO

const menuBarsIcon = document.querySelector('.menu-bars-mobile')
const exitIconMobile = document.querySelector('.exit-icon-mobile')
const heroElementsOpacity = document.querySelector('.opacity-hero')

const menu_Links_Mobile = document.querySelector('.links-container-mobile')

menuBarsIcon.addEventListener('click', e => {
    menuBarsIcon.style.display = 'none'
    exitIconMobile.style.display = 'inline-block'
    menu_Links_Mobile.classList.add('links-container-mobile-appear')
    heroElementsOpacity.classList.add('opacity-click')
})

exitIconMobile.addEventListener('click', e => {
    exitIconMobile.style.display = 'none'
    menuBarsIcon.style.display = 'inline-block'
    menu_Links_Mobile.classList.remove('links-container-mobile-appear')
    heroElementsOpacity.classList.remove('opacity-click')
})



window.addEventListener('resize', e => {
    const width  = window.innerWidth
    if (width > 900) {
        menuBarsIcon.style.display = 'none'
    } else {
        menuBarsIcon.style.display = 'inline-block'
    }
})