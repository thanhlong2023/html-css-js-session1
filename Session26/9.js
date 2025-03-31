let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = arr.filter(item => item % 2 === 0);
let arr3 = arr.filter(item => item % 2 !== 0);
console.log('Tổng chẵn: ', arr2.reduce((total, item) => total + item, 0));
console.log('Tổng lẻ: ', arr3.reduce((total, item) => total + item, 0));