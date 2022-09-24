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


function getData() {
    let api = `http://localhost:5000/api/blog`;
    fetch(api)
    .then (response => response.json())
    .then (data => {
        let blogSection = document.querySelector('.blogs__content');
        if(data){
            data.forEach( () => {
                blogSection += `
                <div class="blog__zone">
                <img src="./img/${data.image}" alt="">
                <p>${data.name}</p>
            </div>
                `
            });
        }
    })
}
getData();