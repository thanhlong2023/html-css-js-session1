
function getMaxNumberFromDigits(num) {
    // Chuyển số thành chuỗi, sau đó thành mảng các chữ số
    let digits = num.toString().split("");

    // Sắp xếp các chữ số theo thứ tự giảm dần
    digits.sort((a, b) => b - a);

    // Ghép các chữ số lại thành một chuỗi, rồi chuyển thành số
    return parseInt(digits.join(""), 10);
}

// Test
let input = 2736;
console.log("Số ban đầu:", input);
console.log("Số lớn nhất có thể tạo:", getMaxNumberFromDigits(input)); // Output: 7632