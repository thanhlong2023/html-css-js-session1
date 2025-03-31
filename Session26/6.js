/**
 * Hàm định dạng ngày từ mảng chuỗi
 * @param {string[]} dateArray - Mảng chuỗi ngày định dạng YYYY-MM-DD
 * @returns {string[]} - Mảng chuỗi ngày định dạng DD/MM/YYYY
 */
function formatDates(dateArray) {
    return dateArray.map((date) => {
        let [year, month, day] = date.split("-"); // Tách năm, tháng, ngày
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`; // Định dạng DD/MM/YYYY
    });
}

// Test
const input = ["2025-03-10", "2024-12-25", "2023-07-01"];
const output = formatDates(input);

console.log("Input:", input);
console.log("Output:", output);