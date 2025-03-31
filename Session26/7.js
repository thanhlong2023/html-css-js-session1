let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrfillter = arr.filter(item => item % 2 === 0);
let arrBinhPhuong = arrfillter.map(item => item ** 2);
console.log(arrBinhPhuong);