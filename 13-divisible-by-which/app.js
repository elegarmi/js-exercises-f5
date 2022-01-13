let container = document.getElementById("container");
let num = parseInt(prompt('Enter a number '));
let divisors = [2, 3, 5, 7];
let divisible = false;

divisors.forEach(divisor => {
    if(num % divisor === 0) {
        container.innerHTML += `${num} is divisible by ${divisor} <br>`;
        divisible = true;
    } 
}); 

if(!divisible) {
    container.innerHTML = `${num} is not divisible by any of these numbers: 2, 3, 5, 7`;
}