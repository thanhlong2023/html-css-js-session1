
let arr = ['c', '2', 'd', '3'];

// Tìm và in ra các ký tự số trong mảng
let digitChars = arr.filter(char => !isNaN(char) && char.trim() !== ''); // Lọc các ký tự số

if (digitChars.length > 0) {
    console.log(digitChars.join(' ')); // In ra các ký tự số cách nhau bởi dấu cách
} else {
    console.log("Không có ký tự số");
}