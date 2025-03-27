let arr = []; // Mảng để quản lý các phần tử

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function menu() {
    let choice;
    do {
        console.log(`
        ================== MENU ===================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
        4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
        5. In ra các số nguyên tố trong mảng và tính tổng
        6. Nhập một số và đếm số lần xuất hiện trong mảng
        7. Thêm một phần tử vào vị trí chỉ định
        8. Xóa một phần tử theo giá trị
        9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
        0. Thoát
        ============================================
        `);

        choice = parseInt(prompt("Lựa chọn của bạn: "));
        switch (choice) {
            case 1:
                let n = parseInt(prompt("Nhập số phần tử: "));
                arr = [];
                for (let i = 0; i < n; i++) {
                    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `)));
                }
                console.log("Mảng đã được nhập:", arr);
                break;

            case 2:
                console.log("Các phần tử đang quản lý:", arr);
                break;

            case 3:
                let evenNumbers = arr.filter(num => num % 2 === 0);
                let evenSum = evenNumbers.reduce((sum, num) => sum + num, 0);
                evenNumbers.sort((a, b) => b - a);
                console.log("Các phần tử chẵn:", evenNumbers);
                console.log("Tổng các phần tử chẵn:", evenSum);
                break;

            case 4:
                if (arr.length > 0) {
                    let max = Math.max(...arr);
                    let min = Math.min(...arr);
                    console.log("Giá trị lớn nhất:", max, "vị trí:", arr.indexOf(max));
                    console.log("Giá trị nhỏ nhất:", min, "vị trí:", arr.indexOf(min));
                } else {
                    console.log("Mảng rỗng, không có giá trị lớn nhất và nhỏ nhất.");
                }
                break;

            case 5:
                let primeNumbers = arr.filter(isPrime);
                let primeSum = primeNumbers.reduce((sum, num) => sum + num, 0);
                console.log("Các số nguyên tố:", primeNumbers);
                console.log("Tổng các số nguyên tố:", primeSum);
                break;

            case 6:
                let numberToCount = parseInt(prompt("Nhập số cần đếm: "));
                let count = arr.filter(num => num === numberToCount).length;
                console.log(`Số lần xuất hiện của ${numberToCount}:`, count);
                break;

            case 7:
                let valueToAdd = parseInt(prompt("Nhập giá trị cần thêm: "));
                let position = parseInt(prompt("Nhập vị trí cần thêm: "));
                if (position >= 0 && position <= arr.length) {
                    arr.splice(position, 0, valueToAdd);
                    console.log("Mảng sau khi thêm phần tử:", arr);
                } else {
                    console.log("Vị trí không hợp lệ.");
                }
                break;

            case 8:
                let valueToRemove = parseInt(prompt("Nhập giá trị cần xóa: "));
                let indexToRemove = arr.indexOf(valueToRemove);
                if (indexToRemove !== -1) {
                    arr.splice(indexToRemove, 1);
                    console.log("Mảng sau khi xóa phần tử:", arr);
                } else {
                    console.log("Không tìm thấy giá trị trong mảng.");
                }
                break;

            case 9:
                let sortOrder = prompt("Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần: ");
                if (sortOrder === 'asc') {
                    arr.sort((a, b) => a - b);
                    console.log("Mảng sau khi sắp xếp tăng dần:", arr);
                } else if (sortOrder === 'desc') {
                    arr.sort((a, b) => b - a);
                    console.log("Mảng sau khi sắp xếp giảm dần:", arr);
                } else {
                    console.log("Lựa chọn không hợp lệ.");
                }
                break;

            case 0:
                console.log("Thoát chương trình.");
                break;

            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 0);
}

menu();