
function findMissingNumber(arr) {
    // Tính tổng của dãy số liên tiếp đầy đủ
    let n = arr.length + 1; // Số phần tử nếu không bị thiếu
    let expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2;

    // Tính tổng của mảng hiện tại
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    // Số bị thiếu là hiệu giữa tổng kỳ vọng và tổng thực tế
    return expectedSum - actualSum;
}

// Test
let arr = [1, 2, 3, 4, 6]; // Mảng liên tiếp bị thiếu số 5
console.log("Mảng:", arr);
console.log("Số bị thiếu:", findMissingNumber(arr)); // Output: 5