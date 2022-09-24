const menuOpen = document.getElementById('menu-btn');
const menuClose = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav__menu')

menuOpen.addEventListener('click', function () {
    menuOpen.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
})

menuClose.addEventListener('click', function() {
    navMenu.classList.remove('is-active');
    menuOpen.classList.remove('is-active');
})
