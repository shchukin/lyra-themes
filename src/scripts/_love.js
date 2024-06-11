new Swiper('.love .swiper', {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            pagination: false
        },
        // when window width is >= 741px
        741: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
                rows: 2,
            },
            scrollbar: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
    },
    autoHeight: true,
    spaceBetween: 40,
    mousewheel: {
        forceToAxis: true,
    },
});


