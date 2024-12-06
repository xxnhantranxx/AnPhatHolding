const SliderProduct = new Swiper('.SliderProduct', {
    loop: true, // Bật chế độ vòng lặp vô hạn
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // freeMode: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    breakpoints: {
        640: { 
            slidesPerView: 1,
            spaceBetween: 0,
         },
        768: { 
            slidesPerView: 2,
            spaceBetween: 30,
         },
        1024: { 
            slidesPerView: 3,
            spaceBetween: 30, 
        },
    },
});
const SlideProjects = new Swiper('.SlideProjects', {
    loop: true, // Bật chế độ vòng lặp vô hạn
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swpier_prj-next',
        prevEl: '.swpier_prj-prev',
    },
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { 
            slidesPerView: 1,
            spaceBetween: 0,
         },
        768: { 
            slidesPerView: 2,
            spaceBetween: 30,
         },
        1024: { 
            slidesPerView: 4,
            spaceBetween: 30, 
        },
    },
});
var ThumbGallery = new Swiper(".ThumbGallery", {
    loop: true,
    spaceBetween: 4,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
});
var ProductGallery = new Swiper(".ProductGallery", {
    loop: true,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: ThumbGallery,
    },
  });