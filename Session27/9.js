
function sortEvenKeepOdd(arr) {
    // Lọc ra các số chẵn và sắp xếp tăng dần
    let evenNumbers = arr.filter((num) => num % 2 === 0).sort((a, b) => a - b);

    // Duyệt qua mảng gốc và thay thế các số chẵn bằng số đã sắp xếp
    let evenIndex = 0;
    return arr.map((num) => {
        if (num % 2 === 0) {
            return evenNumbers[evenIndex++]; // Lấy số chẵn đã sắp xếp
        }
        return num; // Giữ nguyên số lẻ
    });
}

// Test
let input = [5, 3, 2, 8, 1, 4];
let output = sortEvenKeepOdd(input);

console.log("Mảng ban đầu:", input);
console.log("Mảng sau khi sắp xếp:", output); // Output: [5, 3, 2, 4, 1, 8]