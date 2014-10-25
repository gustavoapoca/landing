// Calculator 1.0

// var calc = {
// 	"sum": function sum(...term) {
// 		var parcial = term[0];
// 		for (var i = 0; i < term.length - 1; i++) {
// 			parcial += term[i + 1];
// 		};
// 		return parcial;
// 	},
// 	"sub": function subtract(...term) {
// 		var parcial = term[0];
// 		for (var i = 0; i < term.length - 1; i++) {
// 			parcial -= term[i + 1];
// 		};
// 		return parcial;
// 	}
// }

// var input1 = document.getElementById("somar1");
// var input2 = document.getElementById("somar2");
// var sumOutput = document.getElementById("sum_equals");

// var sumX;
// var sumY;
// var sumResult;

// document.getElementById("sum_equals_btn").addEventListener("click", function() {
// 	sumX = parseFloat(input1.value);
// 	sumY = parseFloat(input2.value);
// 	sumResult = calc.sum(sumX,sumY);
// 	document.getElementById("sum_equals").innerHTML = sumResult;
// });

// document.getElementById("limpar_btn").addEventListener("click", function() {
// 	input1.value = null;
// 	input2.value = null;
// 	sumOutput.innerHTML = null;

// });


// Calculator 1.1

var calcInput = document.getElementById("calc_input");
var calcOutput = document.getElementById("result");
var equalsBtn = document.getElementById("equals_btn");

// for testing the operation type
var isSum = /[+]/;
var isMinus = /[-]/;

var operation = calcInput.value;

var sumResult;
var minusResult;

console.log("o usuário digitou " + operation);

// the engine
var calculator = {
	"sum": function sumFunc(userInput) {
		var operationTerms = userInput.split("+");
		function toNum(element, index, array) {
			array[index] = parseFloat(array[index]);
		}
		operationTerms.forEach(toNum);
		var result = operationTerms.reduce(function(a, b) {
			return a + b;
		});
		return result;
	},
	"minus": function minusFunc(userInput) {
		var operationTerms = userInput.split("-");
		function toNum(element, index, array) {
			array[index] = parseFloat(array[index]);
		}
		operationTerms.forEach(toNum);
		var result = operationTerms.reduce(function(a, b) {
			return a - b;
		});
		return result;
	}
}

equalsBtn.addEventListener("click", function() {
	operation = calcInput.value;
	if (isSum.test(operation)) {
		console.log("é uma operação de soma");
		console.log("os termos a serem somados: " + operation.split("+"));
		sumResult = calculator.sum(operation);
		document.getElementById("result").innerHTML = sumResult; 
	} else if (isMinus.test(operation)) {
		console.log("é uma operação de subtração");
		console.log("os termos a serem subtraídos: " + operation.split("-"));
		minusResult = calculator.minus(operation);
		document.getElementById("result").innerHTML = minusResult;
	}
});

document.getElementById("limpar_btn").addEventListener("click", function() {
	calcInput.value = null;
	calcOutput.innerHTML = null;
});





