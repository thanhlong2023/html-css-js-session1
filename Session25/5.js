let countNumber = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }
    if (count > 0) {
        return count;
    } else {
        return 'Không tìm thấy số nguyên dương trong mảng';
    }
}
let arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5]
console.log(countNumber(arr));