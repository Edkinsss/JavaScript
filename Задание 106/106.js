let arr = [2, 5, 9, 15, 1, 4];
for (let i of arr) {
    if (i >= 3 && i <= 10) {
        console.log(i);
    }
}

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let y in obj) {
    if (y % 2 !== 0) {
        console.log(obj[y])
    }
}

