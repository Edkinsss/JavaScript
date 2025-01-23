let arr = [22, 21, 44, 43, 56];
let ms = []

for (let i of arr) {
    if (i % 2 == 0){
        ms.push(i);
    }
    console.log(ms);
}

let arr1 = [];
let c = String(arr1)

for (let u = 1; u <= 10; u++) {
    c += 'x';
	arr1.push(c);
}
console.log(c);



let k = [];

for (let i = 1; i <= 10; i++) {
    k.push(i);
}
console.log(k);