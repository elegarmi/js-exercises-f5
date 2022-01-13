let container = document.getElementById("container");
let num = parseInt(prompt('Enter a number '));

for(i=0; i <= num; i++) {
    if(num % i === 0) {
        container.innerHTML += `${num} is divisible by ${i} <br>`;
    }
}