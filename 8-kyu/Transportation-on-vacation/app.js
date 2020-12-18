// function rentalCarCost(d) {

// }

let d = 1;

let totalDays = d;// всего дней
let sumPerDay = 40;//сумма за день
let sum = sumPerDay * totalDays;//общая сумма, сколько платить
let discount50 = 50;
let discount20 = 20;

if (totalDays >= 7) {
	sum = sum - discount50;
} else if (totalDays >= 3) {
	sum = sum - discount20;
}
console.log(sum);