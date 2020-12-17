// Входящее число для примера
let number = 9119;

// Преобразовываем в строку
let str = number.toString();

// Разбиваем строку и преобразовываем в массив
let arr = str.split('')

// Делаем перебор каждого элемента и возводим в квадрат
let mult
for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * arr[i];
}

// Склеиваем в строку
let newStr = arr.join('')

// Преобразовываем в число
let integer = parseInt(newStr, 10);

console.log(integer);
console.log(typeof integer);

// код для Codewars
// function squareDigits(num) {
// 	let str = num.toString();

// 	let arr = str.split('')

// 	let mult

// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i] * arr[i];
// 	}
// 	let newStr = arr.join('')

// 	let integer = parseInt(newStr, 10);


// 	return integer
// }