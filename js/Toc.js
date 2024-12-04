$(document).ready(function () {
    const $content = $("#content-post");
    const $toc = $("#toc");

    // Lấy tất cả các thẻ h2
    const headings = $content.find("h2");

    // Kiểm tra nếu không có thẻ h2 nào thì dừng lại
    if (headings.length === 0) {
        return; // Không tạo TOC
    }

    // Tạo một danh sách Table of Contents
    const $tocList = $("<ul class='toc-area'></ul>");

    // Lặp qua từng thẻ h2 để tạo TOC
    headings.each(function (index, element) {
        const $heading = $(element);
        const headingText = $heading.text();

        // Thêm mục lục vào danh sách
        const $listItem = $(
            `<li><a href="javascript:void(0)" data-index="${index}">${headingText}</a></li>`
        );
        $tocList.append($listItem);
    });

    // Gắn tiêu đề và danh sách TOC vào #toc
    $toc.append("<h3 class='toc_8ack'>Table of Contents</h3>").append($tocList);

    // Thêm hiệu ứng cuộn mượt mà khi nhấn vào liên kết
    $toc.on("click", "a", function (e) {
        e.preventDefault();

        // Lấy chỉ số của thẻ h2 từ data-index
        const targetIndex = $(this).data("index");

        // Lấy vị trí của thẻ h2 theo chỉ số
        const targetHeading = headings.eq(targetIndex);

        if (targetHeading.length) {
            $("html, body").animate(
                {
                    scrollTop: targetHeading.offset().top,
                },
                500 // Thời gian cuộn (500ms)
            );
        }
    });

    // Làm nổi bật mục lục tương ứng khi cuộn
    $(window).on("scroll", function () {
        const scrollPosition = $(window).scrollTop();
        let activeIndex = 0;

        headings.each(function (index, element) {
            const $heading = $(element);
            const headingTop = $heading.offset().top - 100; // Điều chỉnh khoảng cách nếu cần
            if (scrollPosition >= headingTop) {
                activeIndex = index;
            }
        });

        // Xóa lớp "active" khỏi tất cả các mục
        $toc.find("a").removeClass("active");

        // Thêm lớp "active" vào mục tương ứng
        $toc.find(`a[data-index="${activeIndex}"]`).addClass("active");
    });

    $(window).scroll(function () {
        var sticky = $('._6fro > .col-inner');
        var scroll = $(window).scrollTop();
        var topBar = $('#top-bar').innerHeight();
        var mainMenu = $('#masthead').innerHeight();
        var wideNav = $('#wide-nav').innerHeight();
        var AboutBanner = $('.AboutBanner.SingleCostSection').innerHeight();
        var Overhand = $('.overhand-deys').innerHeight();
        var Fiftieth = $('.fiftieth-bop').innerHeight();
        var isScroll = topBar + mainMenu + wideNav + AboutBanner + Overhand;
        var isStopScroll = (topBar + mainMenu + wideNav + AboutBanner + Overhand + Fiftieth) - 200;
        if (scroll >= isScroll && scroll < isStopScroll) {
            sticky.addClass('sticky');
            sticky.removeClass('position-bottom');
        } else if (scroll >= isScroll && scroll > isStopScroll) {
            sticky.removeClass('sticky');
            sticky.addClass('position-bottom');
        } else {
            sticky.removeClass('sticky');
            sticky.removeClass('position-bottom');
        }
    });
});
