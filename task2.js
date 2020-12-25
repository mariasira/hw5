/*Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
Найти сумму и количество положительных элементов.
Найти минимальный элемент массива и его порядковый номер.
Найти максимальный элемент массива и его порядковый номер.
Определить количество отрицательных элементов.
Найти количество нечетных положительных элементов.
Найти количество четных положительных элементов.
Найти сумму четных положительных элементов.
Найти сумму нечетных положительных элементов.
Найти произведение положительных элементов.
Найти наибольший среди элементов массива, остальные обнулить.*/

const values = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let i = "";
const positiveNumbers = [];
const negativeNumbers = []; 
for(i = 0; i < values.length; i++) { 
    values[i] >= 0 ? positiveNumbers.push(values[i]) : negativeNumbers.push(values[i]);
}
//console.log(positiveNumbers);
const resultPositiveNumbers = 'Amount of positive numbers: ' + positiveNumbers.length;
const resultNegativeNumbers = 'Amount of negative numbers: ' + negativeNumbers.length;
console.log(resultPositiveNumbers);
console.log(resultNegativeNumbers);

let sumOfPositiveNumbers = values.reduce(function(sum, current) {
	if (current >= 0) {
		return sum + current;
	} else {
		return sum;
	}
});
const resultOfSumOfPositiveNumbers = 'Sum of positive numbers is: ' + sumOfPositiveNumbers;
console.log(resultOfSumOfPositiveNumbers);

let minimumValue = values[0];
for (i = 1; i < values.length; i++) {
   if (values[i] < minimumValue) {
      minimumValue = values[i];   
   }
}
console.log("Minimum value = " + minimumValue);
const sequenceNumberofMinimumValue = values.indexOf(minimumValue);
console.log("Sequence number of minimum value is " + sequenceNumberofMinimumValue);

let maximumValue = values[0];
for (i = 1; i < values.length; i++) {
   if (values[i] > maximumValue) {
      maximumValue = values[i];   
   }
}
console.log("Maximum value = " + maximumValue);
const sequenceNumberofMaximumValue = values.indexOf(maximumValue);
console.log("Sequence number of maximum value is " + sequenceNumberofMaximumValue);

const positiveEvenNumbers = values.filter(function (elem) {
	return elem % 2 == 0 && elem > 0;
});
const resultPositiveEvenNumbers = 'Amount of positive and even numbers is ' + positiveEvenNumbers.length;
console.log(resultPositiveEvenNumbers);

const positiveOddNumbers = values.filter(function(elem) {
	return elem % 2 !== 0 && elem > 0;
});
const resultPositiveOddNumbers = 'Amount of positive and odd numbers is ' + positiveOddNumbers.length;
console.log(resultPositiveOddNumbers);

const sumOfResultPositiveEvenNumbers = positiveEvenNumbers.reduce((sum, current) => sum + current);
console.log(`Sum of positive and even numbers is ${sumOfResultPositiveEvenNumbers}`);

const sumOfResultPositiveOddNumbers = positiveOddNumbers.reduce((sum, current) => sum + current);
console.log(`Sum of positive and odd numbers is ${sumOfResultPositiveOddNumbers}`);

let multiplicationOfPositiveNumbers = positiveNumbers.reduce((multiplication, current) => multiplication * current); 
console.log(`Multiplication of positive numbers is ${multiplicationOfPositiveNumbers}`);

let maximumNumberBetween0 = values.map(value => maximumValue !== value ? 0 : value);
console.log(maximumNumberBetween0);