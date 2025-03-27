let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1.1];
// Đếm số nguyên âm và in ra
let count = 0;

for (let num of arr) {
    if (num < 0 && Number.isInteger(num)) {
        count++;
    }
}

console.log(count); // In ra số lượng số nguyên âm