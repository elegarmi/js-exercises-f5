let container = document.getElementById("container");
let num = parseInt(prompt('Enter the number'));
let divisors = [];

for(i=0; i <= num; i++ ) {
    if(num % i === 0) {
        divisors.push(i); 
    }  
}

if(num % 1 === 0 && num % num === 0) {
    
    if(num != 1 && divisors.length == 2) {
        container.innerHTML = `${num} is a prime number`;
    }

    if(num == 1) {
        container.innerHTML = `${num} is not a prime number`;
    }

    if(divisors.length > 2) {
        container.innerHTML = `${num} is not a prime number`; 
    }
}