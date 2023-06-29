const mobileMenu = document.querySelector('.mobile-navigation')
const burgerButton = document.querySelector('.burger-icon')
const closeButton = document.querySelector('.close-icon')

burgerButton.addEventListener('click', function () {
    mobileMenu.style.display = 'flex'
})

closeButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none'
})


//

const header = document.querySelector('header')
const headerContainer = document.querySelector('.header-container')
const logo = document.querySelector('.desktop-logo')

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        // Scrolling down
        header.style.boxShadow = '0 0 5px rgb(0, 0, 0, 20%)'
        logo.style.scale = '0.85'
        headerContainer.style.padding = '5px 0'
    } else {
        // Scrolling up to the top
        header.style.boxShadow = 'none'
        logo.style.scale = '1'
        headerContainer.style.padding = '15px 0'
    }
});