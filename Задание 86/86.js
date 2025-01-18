let str = '78'; 
let num = Number(str);

if (num >= 10 && num <= 99) {
    let sum = Number(str[0]) + Number(str[1]);
    console.log((sum +  ' = сумма цифр'));

    if (sum <= 9) {
        console.log('Сумма цифр однозначна');
    } else {
        console.log('Сумма цифр двухзначна');
    }
} else {
    console.log('Число не попадает в диапазон от 10 до 99.');
}
