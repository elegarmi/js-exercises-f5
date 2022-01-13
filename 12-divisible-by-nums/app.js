let container = document.getElementById("container");
let num = parseInt(prompt('Enter a number '));

if(num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    container.innerHTML = `${num} is divisible by one of these numbers: 2, 3, 5, 7`;
} else {
    container.innerHTML = `${num} is not divisible by any of these numbers: 2, 3, 5, 7`;
}