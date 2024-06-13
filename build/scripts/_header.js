document.addEventListener('DOMContentLoaded', function () {

    const $burger = document.querySelector('.header__toggle-nav');
    const $nav = document.querySelector('.header__nav');

    $burger.addEventListener('click', function (event) {
        event.stopPropagation();
        $nav.classList.toggle('header__nav--expanded');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            $nav.classList.remove('header__nav--expanded');
        }
    });

    document.addEventListener('click', function (event) {
        if (!$nav.contains(event.target) && !$burger.contains(event.target)) {
            $nav.classList.remove('header__nav--expanded');
        }
    });

});
