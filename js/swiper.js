var swiper1 = new Swiper(".mySwiper1", {
    // 動畫過度:單位豪秒
    speed: 1500,
    // 是否重複撥放
    // loop: true,
    // 自動撥放
    autoplay: {
        // 每張輪播圖要【停留】多久
        delay: 3000,
        // 當使用者點及切換時，是否停止輪播功能
        disableOnInteraction: false,
    },
    // 頁籤
    pagination: {
        el: ".thing01 .swiper-pagination",
    },
    // 左右按鈕
    navigation: {
        nextEl: ".thing01 .swiper-button-next",
        prevEl: ".thing01 .swiper-button-prev",
    },
});
document.querySelector('.thing06-1').addEventListener('click', () => {
    swiper1.slideTo(0)
})
document.querySelector('.thing06-2').addEventListener('click', () => {
    swiper1.slideTo(swiper1.slides.length - 1)
})
// 02
var swiper2 = new Swiper(".mySwiper2", {
    // 動畫過度:單位豪秒
    speed: 1500,
    // 是否重複撥放
    // loop: true,
    // 自動撥放
    autoplay: {
        // 每張輪播圖要【停留】多久
        delay: 3000,
        // 當使用者點及切換時，是否停止輪播功能
        disableOnInteraction: false,
    },
    // 頁籤
    pagination: {
        el: ".thing02 .swiper-pagination",
    },
    // 左右按鈕
    navigation: {
        nextEl: ".thing02 .swiper-button-next",
        prevEl: ".thing02 .swiper-button-prev",
    },
});
document.querySelector('.thing08-1').addEventListener('click', () => {
    swiper2.slideTo(0)
})
document.querySelector('.thing08-2').addEventListener('click', () => {
    swiper2.slideTo(swiper2.slides.length - 1)
})
// 03
var swiper3 = new Swiper(".mySwiper3", {
    // 動畫過度:單位豪秒
    speed: 1500,
    // 是否重複撥放
    // loop: true,
    // 自動撥放
    autoplay: {
        // 每張輪播圖要【停留】多久
        delay: 3000,
        // 當使用者點及切換時，是否停止輪播功能
        disableOnInteraction: false,
    },
    // 頁籤
    pagination: {
        el: ".thing03 .swiper-pagination",
    },
    // 左右按鈕
    navigation: {
        nextEl: ".thing03 .swiper-button-next",
        prevEl: ".thing03 .swiper-button-prev",
    },
});
document.querySelector('.thing10-1').addEventListener('click', () => {
    swiper3.slideTo(0)
})
document.querySelector('.thing10-2').addEventListener('click', () => {
    swiper3.slideTo(swiper3.slides.length - 1)
})

// 04
var swiper4 = new Swiper(".mySwiper4", {
    // 動畫過度:單位豪秒
    speed: 1500,
    // 是否重複撥放
    // loop: true,
    // 自動撥放
    autoplay: {
        // 每張輪播圖要【停留】多久
        delay: 3000,
        // 當使用者點及切換時，是否停止輪播功能
        disableOnInteraction: false,
    },
    // 頁籤
    pagination: {
        el: ".thing12-1 .swiper-pagination",
    },
    // 左右按鈕
    navigation: {
        nextEl: ".thing12-1 .swiper-button-next",
        prevEl: ".thing12-1 .swiper-button-prev",
    },
});