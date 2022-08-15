function average(...numbers) {
    const sum = numbers.reduce((accum, num) => accum + num, 0)

    return sum / numbers.length
};

console.log(average(11, 13, 25, 54, 24, 16, 27))