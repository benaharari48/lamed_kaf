AOS.init({
    offset: 100,  // Distance (px) before the animation starts
    duration: 800, // Animation duration (ms)
    easing: 'ease-in-out', // Easing function
    delay: 200, // Delay before animation starts (ms)
    once: true, // Animation runs only once
    mirror: false, // No animation when scrolling back up
    anchorPlacement: 'top-bottom' // Defines when the animation should trigger
});

var swiperPromotion = new Swiper(".PromotionSwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,  // Center the active slide
    slidesPerView: 'auto',  // Allow the slides to resize based on content
    spaceBetween: 0,  // Adjust space between slides
    navigation: {
        nextEl: '.swiper-button-next',  // Next button selector
        prevEl: '.swiper-button-prev',  // Previous button selector
    },
});

var swiperhero = new Swiper(".swiper-hero", {
    slidesPerView: 1.5,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true, // Center the slides
    initialSlide: 2, // Start from the center slide
    autoplay: {
        delay: 3000, // Set delay for the autoplay
        disableOnInteraction: false, // Continue autoplay even after user interaction
    },
});


var swipercategories = new Swiper('.categories-swiper', {
    slidesPerView: 1,  // רק פריט אחד מוצג בבת אחת
    spaceBetween: 50,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2, // בגרסאות גדולות יותר מוצגים 2 פריטים בשורה
        },
        992: {
            slidesPerView: 5, // 4 פריטים לשורה
        },
        1200: {
            slidesPerView: 7, // 4 פריטים לשורה
        },
        1680: {
            slidesPerView: 10, // 4 פריטים לשורה
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',  // Next button selector
        prevEl: '.swiper-button-prev',  // Previous button selector
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiperproduct = new Swiper('.product-swiper', {
    slidesPerView: 1,  // You can adjust this based on your layout
    spaceBetween: 25,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1680: {
            slidesPerView: 5,
        },
    }
});

var swiperarticles = new Swiper('.articles-swiper', {
    slidesPerView: 1,  // You can adjust this based on your layout
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});

var swiperbannerfull = new Swiper(".swiper-banner-full", {
    loop: true, // Infinite loop
    autoplay: {
        delay: 5000, // Auto-slide every 5 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    effect: "fade", // Enable fade transition
    fadeEffect: {
        crossFade: true, // Smooth fading effect
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet", // Default class
        bulletActiveClass: "swiper-pagination-bullet-active", // Active class
    }
});
