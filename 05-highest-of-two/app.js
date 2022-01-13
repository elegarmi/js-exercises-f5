let container = document.getElementById("container");
let num1 = parseInt(prompt('Enter the first number '));
let num2 = parseInt(prompt('Enter the second number '));
let operation = Math.max(num1, num2);

container.innerHTML = `The highest those nums is ${operation}`;