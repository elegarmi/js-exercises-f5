let container = document.getElementById("container");
let num = parseInt(prompt('Enter a number '));

if(num % 2 === 0 ) {
    container.innerHTML = `${num} is divisible by 2`;
} else {
    container.innerHTML = `${num} is not divisible by 2`;
}