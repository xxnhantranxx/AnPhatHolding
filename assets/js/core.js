$(document).ready(function () {
    //Create variable Width Window
    var widthWindow = $(window).width();
    // Khởi tạo WowJs
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    //Menu hover defautl
    $('.header-nav .menu-item.has-dropdown').hover(
        function () {
            $(this).addClass('current-dropdown');
            $('.overlay_menuhover').addClass('active');
        },
        function () {
            $(this).removeClass('current-dropdown');
            $('.overlay_menuhover').removeClass('active');
        }
    );

    // Xử lý menu Mobile
    $('.mobile-nav .nav-icon').click(function () {
        $(this).parent('.navbar-toggler').hide();
        $('.overlay_skyteam').addClass('active');
        $('.mobile_menu .navbar-collapse').addClass('show');
    });
    $('.mobile_menu > .navbar-collapse > .navbar-toggler').click(function () {
        $('.header-inner > .navbar-toggler').show();
        $('.mobile_menu .navbar-collapse').removeClass('show');
        $('.overlay_skyteam').removeClass('active');
    });
    $('.mobile_menu .has-child .fa-angle-down').click(function () {
        $(this).next('.nav-mobile-sub').slideToggle();
        $(this).toggleClass('rotate_180');
    });
    $(document).on('click', '.overlay_skyteam.active', function (event) {
        $('.header-inner > .navbar-toggler').show();
        $('.mobile_menu .navbar-collapse').removeClass('show');
        $(this).removeClass('active');
        $('.header-inner .searchBoxTop .input-group.show-search-mobile').removeClass('active');
        $('.seach-icon-item .toogleSearch').removeClass('active');
    });
    $('.mobile_menu .navbar-collapse .navbar-toggler').click(function () {
        $('.header-inner > .navbar-toggler').show();
        $('.mobile_menu .navbar-collapse').removeClass('show');
        $('.overlay_skyteam.active').removeClass('active');
        $('.header-inner .searchBoxTop .input-group.show-search-mobile').removeClass('active');
    });

    // Xử lý back to top
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Xử lý sticky header
    $(window).scroll(function () {
        var sticky = $('.header-wrapper');
        var scroll = $(window).scrollTop();
        // var topBar = $('#top-bar').innerHeight();
        // var mainMenu = $('#masthead').innerHeight();
        var header = $('#header').innerHeight();
        var sectionIntro = $('.smote-off').innerHeight()
        var isScroll = header + sectionIntro;
        // console.log(isScroll)
        if (scroll >= isScroll) {
            // sticky.addClass('stuck');
            $('.back-to-top').addClass('active');
        } else {
            sticky.removeClass('stuck');
            $('.back-to-top').removeClass('active');
        }
    });
});