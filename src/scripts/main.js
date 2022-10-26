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

let apiKey = '923dfc7395eb491c8380f1125cf62b67';
let apiURL = `https://newsapi.org/v2/everything?q=tesla&from=2022-09-23&sortBy=publishedAt&${apiKey}`;

