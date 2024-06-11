let swiperInstance;

function initializeSwiper() {
    if (window.matchMedia('(min-width: 741px)').matches) {
        swiperInstance = new Swiper('.love .swiper', {
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
