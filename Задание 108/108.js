let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    res += elem;
}
console.log(res);


let ms = [2, 5, 9, 3, 1, 4, 6];
let r = 0;
for (let elem1 of ms) {
    if (elem1 % 2 == 0) {
        r += elem1;
    }
}
console.log(r)

let m = [2, 3, 2, 4, 5];
let q = 0;
for (let e of m) {
    e **= 2;
    q += e;
}
console.log(q);

let a = [2, 5, 9, 3, 1, 4];
let c = 1;
for (let y of a) {
    c *= y;
}
console.log(c);




