//hàm kiểm tra đối xứng
let checkDoiXung = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return 'Không đối xứng';
        }
    }
    return 'Đối xứng';
}
console.log(checkDoiXung('aloola'));