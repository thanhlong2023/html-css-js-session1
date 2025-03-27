let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Không phải dãy số fibonacci");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `)));
    }

    // Kiểm tra dãy Fibonacci
    let isFibonacci = true;
    if (n >= 3) {
        for (let i = 2; i < n; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                isFibonacci = false;
                break;
            }
        }
    } else if (n === 1 && arr[0] !== 0) {
        isFibonacci = false;
    } else if (n === 2 && !(arr[0] === 0 && arr[1] === 1)) {
        isFibonacci = false;
    }

    if (isFibonacci) {
        console.log("Là dãy số fibonacci");
    } else {
        console.log("Không phải dãy số fibonacci");
    }
}