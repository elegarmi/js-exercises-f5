let container = document.getElementById("container");
let age = parseInt(prompt('Enter your age'));

if(age > 18) {
    container.innerHTML = 'You can drive';
}

else {
    container.innerHTML = 'You cannot drive';
}