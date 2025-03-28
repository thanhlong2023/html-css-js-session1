//hàm viết hoa chữ cái đầu tiên
let capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log('cao-thành-long'.slice(1));
console.log('cao thành long'.split(' '));
console.log('cao-thành-long'.split('-').join(' '));
console.log('cao thành long'.split(' ').map(capitalizeFirstLetter).join(' '));
