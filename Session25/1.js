let findMinValue = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
let arr = [1, 2, 3, 4, 5];
console.log(findMinValue(arr));