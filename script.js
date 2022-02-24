




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



gsap.registerPlugin(ScrollTrigger)




gsap.from(".link-nav-itself", {
    duration: 1,
    ease: "power1.out",
    delay: 2,
    opacity: 0,
    stagger: .5
})


gsap.from(".image-hero", {
    duration: 1,
    ease: "power1.out",
    delay: 2,
    opacity: 0,
    y: '20px',
    stagger: .5
})







gsap.from('.header-container', { 
    x: '-100%',
    duration: 1,
    delay: 1
})


gsap.from(".first-text-hero-left", {
    y: 200,
    duration: 1,
    ease: "power1.out",
    delay: 1,
    opacity: 0
})

