document.addEventListener('DOMContentLoaded', function () {

    const $burger = document.querySelector('.header__toggle-nav');
    const menu = document.querySelector('.header__menu');

    $burger.addEventListener('click', function (event) {
        event.stopPropagation();
        menu.classList.toggle('header__menu--expanded');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            menu.classList.remove('header__menu--expanded');
        }
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !$burger.contains(event.target)) {
            menu.classList.remove('header__menu--expanded');
        }
    });

});
