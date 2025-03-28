let users = [];

function registerEmail(email) {
    // Kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    if (!emailRegex.test(email)) {
        console.log("Email không hợp lệ! Vui lòng nhập lại.");
        return;
    }

    // Kiểm tra email đã tồn tại
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
        return;
    }

    // Thêm email vào mảng và thông báo đăng ký thành công
    users.push(email);
    console.log("Đăng ký thành công!");
}

// Test chương trình
registerEmail("example@gmail.com"); // Đăng ký thành công!
registerEmail("example@gmail.com"); // Tài khoản đã tồn tại!
registerEmail("invalid-email");     // Email không hợp lệ!
registerEmail("user@domain.vn");    // Đăng ký thành công!

console.log(users); // ["example@gmail.com", "user@domain.vn"]