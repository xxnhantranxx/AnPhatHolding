const SlideProjects = new Swiper('.SlideProjects', {
    loop: true, // Bật chế độ vòng lặp vô hạn
    slidesPerView: 1,
    // slidesPerGroup: 3,
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