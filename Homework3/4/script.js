let a = prompt("Введите первый множитель: ");
let b = prompt("Введите второй множитель: ");
let userAnswer = prompt("Сколько будет " + a + " * " + b + "?");

let correctAnswer = a * b;

if (userAnswer == correctAnswer) {
    console.log("Правильно!");
} else {
    console.log("Ошибка! Правильный ответ: " + correctAnswer);
}
