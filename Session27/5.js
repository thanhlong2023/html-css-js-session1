//tạo hàm nhận 2 tham số, 1 mảng và 1 số n, tách mảng thành các mảng con có n phần tử
function tachMang(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(tachMang(arr, 3));