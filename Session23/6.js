
let arr = ["", false, 0, 5, 10, "Hello world!"]; // Thay đổi mảng để kiểm tra

// Loại bỏ các phần tử có giá trị falsy
let filteredArr = arr.filter(Boolean); // Sử dụng Boolean để lọc các giá trị truthy

console.log(filteredArr); // In ra mảng sau khi loại bỏ các giá trị falsy