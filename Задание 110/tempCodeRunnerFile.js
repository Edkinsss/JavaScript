for (let h = 10; h <= 1000; h ++) {
    let str1 = String(h);

    let first = Number(str1[0]);
    let second = Number(str1[1])

    let summ = first + second;
    if (summ === 5) {
        console.log(h);
    }
}