let container = document.getElementById("container");
let num = parseInt(prompt('Enter the number'));
let divisors = [];

// Is a prime number if num > 1, divisible only by 1 and itself
// Is not a prime number if num = 1, divisible by itself and more

for(i=0; i <= num; i++ ) {
    if(num % i === 0) {
        divisors.push(i); 
    }  
}

if(num % 1 === 0 && num % num === 0) {
    // prime
    if(num != 1 && divisors.length == 2) {
        container.innerHTML = `${num} is a prime number`;
    }

    // !prime
    if(num == 1) {
        container.innerHTML = `${num} is not a prime number`;
    }

    if(divisors.length > 2) {
        container.innerHTML = `${num} is not a prime number`; 
    }
}