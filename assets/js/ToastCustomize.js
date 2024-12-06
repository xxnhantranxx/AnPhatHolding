// Biến toàn cục lưu trữ ID của timeout
let snackbarTimeout;

window.showSnackbar = function (message, icon, color) {
    // Kiểm tra nếu snackbar đã tồn tại, xóa nó trước
    const existingSnackbar = document.getElementById('snackbar');
    if (existingSnackbar) {
        existingSnackbar.remove();
        // Hủy timeout cũ nếu có
        clearTimeout(snackbarTimeout);
    }

    // Tạo HTML cho snackbar
    const snackbarHtml = `
        <div id="snackbar" class="show">
            <div class="icon" style="color: ${color}">${icon}</div>
            <div class="mess">${message}</div>
        </div>
    `;

    // Append vào body
    document.body.insertAdjacentHTML('beforeend', snackbarHtml);

    // Lấy phần tử snackbar vừa được tạo
    const snackbar = document.getElementById('snackbar');

    // Hiển thị snackbar với animation
    snackbar.classList.add('show');

    // Đặt timeout mới để ẩn snackbar sau 3 giây
    snackbarTimeout = setTimeout(() => {
        const snackbar = document.getElementById('snackbar');
        if (snackbar) snackbar.remove();
    }, 3000); // Hiển thị trong 3 giây
};