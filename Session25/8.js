function isStrongPassword(password) {
    // Kiểm tra độ dài ít nhất 8 ký tự
    if (password.length < 8) {
        return false;
    }

    // Kiểm tra có ít nhất một chữ hoa
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Kiểm tra có ít nhất một chữ thường
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Kiểm tra có ít nhất một số
    if (!/[0-9]/.test(password)) {
        return false;
    }

    return true;
}

// Test cases
console.log(isStrongPassword("Abc123!@")); // true
console.log(isStrongPassword("weakpass")); // false