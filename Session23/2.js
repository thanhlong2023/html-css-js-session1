let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = arr[0];
let indexMax = null;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        indexMax = i;
    }
}

console.log(max, indexMax);