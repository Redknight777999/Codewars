// в зависимости от значения оператора ставим его между переменными

function basicOp(operation, value1, value2) {
	if (operation == '+') return value1 + value2;
	if (operation == '-') return value1 - value2;
	if (operation == '*') return value1 * value2;
	if (operation == '/') return value1 / value2;
}

console.log(basicOp('+', 4, 7));
