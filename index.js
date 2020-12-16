let number = 9119;
let str = number.toString();
// split()
// console.log(typeof str);

let arr = str.split('')
// console.log(arr);
let mult

for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * arr[i];
}

let newStr = arr.join('')

let integer = parseInt(newStr, 10);

console.log(integer);
console.log(typeof integer);

// console.log(typeof parsed);

// let parsed = parseInt('10', 10);

// console.log(typeof parsed);