// Подается строка со словами
// Генератор случайных имен https://calculat.ru/generator-imen-i-familij-onlajn
let str = 'Агап, Никанор, Надежда, Измаил, Виктория, Евстигней, Аврора, Агния, Анфиса, Аида';

// Преобразование строки в массив, делитель - пробел + запятая
let arr = str.split(', ');
console.log(arr);

// Ищем наименьший(е) по длине элемент(ы) массива
let arr_min = arr[0].length;
for (i = 1; i < arr.length; i++) {
	if (arr[i].length <= arr_min) {
		arr_min = arr[i];
	}
}

// Измерить длину элемента и вывести на экран
console.log(arr_min.length);