let n = parseInt(prompt("Nhập số nguyên dương n: "));
if (n < 0) {
    console.log('Nhập lại số nguyên dương');
} else if (n === 0) {
    console.log('Mảng không có phần tử nào');
} else {
    let arr = [1, 2, 3, 4, 5]; // Mảng mẫu, bạn có thể thay đổi
    if (n > arr.length) {
        console.log('Số lượng phần tử vượt quá kích thước mảng');
    } else {
        let maxFirst = -Infinity; // Giá trị lớn nhất
        let maxSecond = -Infinity; // Giá trị lớn thứ hai

        for (let i = 0; i < n; i++) {
            if (arr[i] > maxFirst) {
                maxSecond = maxFirst; // Cập nhật giá trị lớn thứ hai
                maxFirst = arr[i]; // Cập nhật giá trị lớn nhất
            } else if (arr[i] > maxSecond && arr[i] !== maxFirst) {
                maxSecond = arr[i]; // Cập nhật giá trị lớn thứ hai
            }
        }

        if (maxSecond === -Infinity) {
            console.log('Không có giá trị lớn thứ hai');
        } else {
            console.log('Giá trị lớn nhất:', maxFirst);
            console.log('Giá trị lớn thứ hai:', maxSecond);
        }
    }
}