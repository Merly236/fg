let num1 = prompt("Введите первое число: ");
let num2 = prompt("Введите второе число: ");
let num3 = prompt("Введите третье число: ");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
console.log("Вы ввели не число!");
} else {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let max = num1;

    if (num2 > max) {
    max = num2;
    }

    if (num3 > max) {
    max = num3;
    }

    console.log("Наибольшее число: " + max);
}
