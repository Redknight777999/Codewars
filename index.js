// Подается строка со словами
// Генератор случайных имен https://calculat.ru/generator-imen-i-familij-onlajn
// let str = 'Агап, Никанор, Надежда, Измаил, Виктория, Евстигней, Аврора, Агния, Анфиса, Аида';

// Преобразование строки в массив, делитель - пробел + запятая
// let arr = str.split(', ');
// console.log(arr);

// Ищем наименьший(е) по длине элемент(ы) массива
// let arr_min = arr[0].length;
// for (i = 1; i < arr.length; i++) {
// 	if (arr[i].length <= arr_min) {
// 		arr_min = arr[i];
// 	}
// }

// Измерить длину элемента и вывести на экран
// console.log(arr_min.length);


// Test.describe("Example tests", _ => {
// 	Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// 	Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// });


function findShort(s) {
	let arr = s.split(' ');
	arr.sort((a, b) => a.length - b.length);
	return arr[0].length;
}

function findShort(s) {
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length < smallest.length) {
			smallest = arr[i];
		}
	}
	return smallest.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));