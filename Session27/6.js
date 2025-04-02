// Tạo function kiểm tra xem một mảng có phải cấp số cộng
function checkCapSoCong(arr) {
    if (arr.length < 2) return true; // Mảng có ít hơn 2 phần tử luôn là cấp số cộng

    let d = arr[1] - arr[0]; // Tính công sai từ hai phần tử đầu tiên
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== d) {
            return false; // Nếu công sai không đồng nhất, không phải cấp số cộng
        }
    }
    return true; // Nếu tất cả công sai đều bằng nhau, là cấp số cộng
}

// Test
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(checkCapSoCong(arr)); // true