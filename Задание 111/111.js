let arr = [1, 2, 3, 0.3, 4, 5, 0, 6, 7, 8];

for (let elem of arr) {
    console.log(elem);
if (elem === 0) {
    break;
    }
}

let arr1 = [1, 2, 3, -5, 0];
let sum = 0;

for (let q of arr1) {
    sum += q;
if (q < 0) {
    break;
    }
    console.log(sum)
}



let arr2 = [1, 2, 3.5, 4, 3, 5];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 3) {
        console.log(i); 
        break;
    }
}