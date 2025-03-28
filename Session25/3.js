let findNumber = (arr) => {
    let result = arr.filter((item, index) => item % 2 === 0);
    return result;
}
let arr = [1, 2, 3, 4, 5];
console.log(findNumber(arr));