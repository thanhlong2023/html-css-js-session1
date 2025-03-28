let checkNT = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return 'Không phái số nguyên tố';
        }
    }
    return 'Là số nguyên tố';
};

console.log(checkNT(7));