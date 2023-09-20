const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const mobileMenu = document.querySelector('.header__top-row')


navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    mobileMenu.classList.toggle('header__top-row-mobile');
    document.body.classList.toggle('no-scroll');
}

mask('[data-tel-input]');