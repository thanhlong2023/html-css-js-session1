/**
 * Lọc các số nguyên tố từ mảng, loại bỏ số 2
 * @param {number[]} arr - Mảng số nguyên
 * @returns {number[]} - Mảng chứa các số nguyên tố (trừ số 2)
 */
function filterPrimesExcludingTwo(arr) {
    return arr.filter((num) => isPrime(num) && num !== 2); // Lọc số nguyên tố và loại bỏ số 2
}

// Test
const input = [10, 2, 3, 5, 7, 9];
const output = filterPrimesExcludingTwo(input);

console.log("Input:", input);
console.log("Output:", output);