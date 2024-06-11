let swiperInstance;

function initializeSwiper() {
    if (window.matchMedia('(min-width: 741px)').matches) {
        swiperInstance = new Swiper('.love .swiper', {
            autoHeight: true,
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
                rows: 2,
            },
            spaceBetween: 40,
            mousewheel: {
                forceToAxis: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}

// Initialize on page load
initializeSwiper();

// Re-initialize on window resize
window.addEventListener('resize', function() {

    // Clear existing Swiper instance if it exists
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }

    initializeSwiper();
});

