// Biến toàn cục lưu trữ ID của timeout
let snackbarTimeout;

window.showSnackbar = function (message, icon, color) {
    // Kiểm tra nếu Snackbar đã tồn tại
    let snackbar = document.getElementById('snackbar');
    if (!snackbar) {
        // Nếu chưa tồn tại, tạo mới Snackbar
        const snackbarHtml = `
            <div id="snackbar" class="show">
                <div class="icon" style="color: ${color}">${icon}</div>
                <div class="mess">${message}</div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', snackbarHtml);
        snackbar = document.getElementById('snackbar');
    } else {
        // Nếu đã tồn tại, cập nhật nội dung
        snackbar.querySelector('.icon').innerHTML = icon;
        snackbar.querySelector('.icon').style.color = color;
        snackbar.querySelector('.mess').innerHTML = message;
        snackbar.classList.remove('fade-out'); // Đảm bảo không bị ẩn
    }

    // Hiển thị Snackbar
    snackbar.classList.add('show');
    snackbar.classList.remove('fade-out'); // Reset hiệu ứng

    // Hủy timeout cũ nếu có
    if (snackbarTimeout) {
        clearTimeout(snackbarTimeout);
    }

    // Đặt timeout mới
    snackbarTimeout = setTimeout(() => {
        snackbar.classList.add('fade-out'); // Thêm hiệu ứng ẩn
        snackbar.addEventListener('animationend', () => {
            if (snackbar.classList.contains('fade-out')) {
                snackbar.remove(); // Xóa sau khi hiệu ứng hoàn tất
            }
        }, { once: true });
    }, 3000); // Hiển thị trong 3 giây
};
