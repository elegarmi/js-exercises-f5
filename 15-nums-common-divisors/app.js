let container = document.getElementById("container");
let num = parseInt(prompt('Enter the first number '));
let num2 = parseInt(prompt('Enter the second number '));
let divisors1 = [];
let divisors2 = [];
let commonDivisors = [];

for(i=0; i <= num; i++ ) {
    if(num % i === 0) {
        divisors1.push(i);       
    }  
}

for(i=0; i <= num2; i++ ) {
    if(num2 % i === 0) {
        divisors2.push(i);       
    }  
}

divisors1.forEach(divisor => {
    if(divisors2.includes(divisor)) {
        commonDivisors.push(divisor);
    };
});

container.innerHTML = `${num} and ${num2} are divisible by ${commonDivisors}`;