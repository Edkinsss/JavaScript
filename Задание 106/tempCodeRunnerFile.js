let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let y in obj) {
    if (y % 2 !== 0) {
        console.log(obj[y])
    }
}