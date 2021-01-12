/* A decimal number can be represented as a sequence of bits. To illustrate:

6 = 00000110
23 = 00010111
From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11

Notes
JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.

*/

function bitwiseAND(n1, n2) {
	const num1 = n1.toString(2).padStart(32,0);
	const num2 = n2.toString(2).padStart(32,0);
	let finalString='';
	for(let i=0;i<32;i++){
		finalString += (Number(num1[i]) & Number(num2[i])).toString();
	}
	return parseInt(finalString,2);
}

function bitwiseOR(n1, n2) {
	const num1 = n1.toString(2).padStart(32,0);
	const num2 = n2.toString(2).padStart(32,0);
	let finalString='';
	for(let i=0;i<32;i++){
		finalString += (Number(num1[i]) | Number(num2[i])).toString();
	}
	return parseInt(finalString,2);
}

function bitwiseXOR(n1, n2) {
		const num1 = n1.toString(2).padStart(32,0);
	const num2 = n2.toString(2).padStart(32,0);
	let finalString='';
	for(let i=0;i<32;i++){
		finalString += (Number(num1[i]) ^ Number(num2[i])).toString();
	}
	return parseInt(finalString,2);
}

/////////////////////////////// if you want to use built in Javascript operators/////////////////////////////////

function bitwiseANDJavascriptBuiltIn(n1, n2) {
	return n1 & n2;
}

function bitwiseORJavascriptBuiltIn(n1, n2) {
	return n1 | n2;
}

function bitwiseXORJavascriptBuiltIn(n1, n2) {
	return n1 ^ n2;
}
