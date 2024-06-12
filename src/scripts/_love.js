let loveSwiperInstance;
let resizeTimeout;

function initSwiper() {
    loveSwiperInstance = new Swiper('.love .swiper', {
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container-padding')),
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                pagination: false,
                speed: 400,
            },
            // when window width is >= 741px
            741: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 40,
                grid: {
                    rows: 2,
                },
                scrollbar: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                speed: 600,
            },
        },
        autoHeight: true,
        mousewheel: {
            forceToAxis: true,
        },
    });
}

// Init Swiper on page load
initSwiper();


// Init Swiper on window resize
function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (loveSwiperInstance) {
            loveSwiperInstance.destroy(true, true);
        }
        initSwiper();
    }, 1000); // 2000ms delay
}

window.addEventListener('resize', handleResize);
