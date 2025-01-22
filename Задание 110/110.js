for (let i = 10; i <= 1000; i ++) {
    let str = String(i);

    if (str[0] === '1' || str[0] === '7'){
        console.log(i);
    }
}

for (let y = 10; y <= 1000; y ++) {
    let srr = String(y);

    let k = Number(srr[0]); 
    let l = Number(srr[1]);
        
    let sum = k + l;
    console.log(sum);
}


for (let u = 10; u <= 1000; u++) {
    let arr = String(u);

    if (arr[0] === '1'){
        console.log(u);
    }
}


for (let h = 10; h <= 1000; h ++) {
    let str1 = String(h);

    let first = Number(str1[0]);
    let second = Number(str1[1])

    let summ = first + second;
    if (summ === 5) {
        console.log(h);
    }
}
