
let arr = ['a', '-2', 'd', '5', 'e']; // Thay đổi mảng để kiểm tra


// Tính tổng các ký tự là số
let sum = arr.reduce((total, char) => {
    if (!isNaN(char) && char.trim() !== '') {
        return total + parseFloat(char); // Chuyển ký tự thành số và cộng vào tổng
    }
    return total;
}, 0);


console.log(sum); // In ra tổng các ký tự là số

