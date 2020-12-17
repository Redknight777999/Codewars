// The main idea is to count all the occuring characters(UTF - 8) in string.
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
// What if the string is empty ? Then the result should be empty object literal { }




// let string = 'dfgdsfgdkiujhixcufrjhsdkfjsdf';
// function count(string) {
// 	let count = {};
// 	string.split('').forEach(function (s) {
// 		count[s] ? count[s]++ : count[s] = 1;
// 	});
// 	return count;
// }

// console.table(string);

// let myString = 'dfgdsfgdkiujhixcufrjhsdkfjsdf';

// function count(string) {
// 	let strLength = string.length;
// 	let result = {};
// 	if (strLength != 0) { // Check the string's length whether it equals to 0
// 		for (let i = 0; i < strLength; i++) { // Iterate the string
// 			let char = string.charAt(i);
// 			if (result.hasOwnProperty(char)) { // Check whether the character is already in the object
// 				result[char]++; // If yes, we augment the occurrence times
// 			} else {
// 				result[char] = 1; // If not, we add it to the "return" object's property
// 			}
// 		}
// 	}
// 	return result;
// }

// console.table(count(myString))

// Массив рандомной длины со случайными буквами

var arr = [];
var arrSize = 8;
for (var i = 0; i < arrSize; i++) {
	var value = getRandomInRange(1, 9);
	if (!checkArray(value)) {
		arr.push(value);
	}
	else {
		i--;
	}
}

console.table(arr);



function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkArray(x) {
	var retValue = false;
	for (var i = 0; i < arrSize; i++) {
		if (arr[i] === x) {
			retValue = true;
			break;
		}
	}
	return retValue;
}