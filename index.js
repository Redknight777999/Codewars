// Fizz Buzz
// https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript
// Return an array containing the numbers from 1 to N, where N is the parametered value.N will never be less than 1
// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

// describe('Fizzbuzz', function () {
// 	it('Should fizzify 10 numbers correctly', function () {
// 		var expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];
// 		Test.assertEquals(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected), 'Fails with 10 numbers!');
// 	});
// });


// Return an array
// function fizzbuzz(n) {
//
// }
// fizzbuzz();

// Создаем массив длины  N
// Заполняем массив числам от 1 до N

// let N = 15;
// let foo = [];

// for (let i = 1; i <= N; i++) {
// 	foo.push(i);
// }

// Берем каждое число и проверяем на делимость без остатка на 3 и 5
// for (let i = 1; i <= foo.length; i++) {
// 	if (foo[i] % 3 == 0 && foo[i] % 5 == 0) (foo[i] = 'FizzBuzz')
// 	else if (foo[i] % 5 == 0) (foo[i] = 'Buzz')
// 	else if (foo[i] % 3 == 0) (foo[i] = 'Fizz')
// }

// console.log(foo);

// Делаем все в функции для Codewars
function fizzbuzz(n) {

	let foo = [];

	for (let i = 1; i <= n; i++) {
		foo.push(i);
	}

	for (let i = 1; i <= foo.length; i++) {
		if (foo[i] % 3 == 0 && foo[i] % 5 == 0) { foo[i] = 'FizzBuzz' }
		else if (foo[i] % 5 == 0) { foo[i] = 'Buzz' }
		else if (foo[i] % 3 == 0) { foo[i] = 'Fizz' }
	}
	return foo;
}

console.log(fizzbuzz(5));