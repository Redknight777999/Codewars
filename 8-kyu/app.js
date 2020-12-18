let number = - 500;

let oppNumber

// Первый вариант
// if (number > 0) {
// 	oppNumber = - number; //если меньше нуля - то ставим знак минус
// } else if (number < 0) {
// 	oppNumber = Math.abs(number); //если больше нуля - то применяем функцию приведения по модулю
// } else {
// 	oppNumber = 0;
// }

// Второй вариант
oppNumber = number * (-1); //умножаем на -1


console.log(oppNumber);
