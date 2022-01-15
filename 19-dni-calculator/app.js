let container = document.getElementById("container");
let letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

function calculate() {
    let num = document.getElementById("num").value;
    let remainder = num % 23;
    let text = `${num} is not a valid number (should be between 0 - 999999999)`;

    if(isNaN(num)) {
        if(confirm(text) == true) {
            document.getElementById("num").value = "";
        }

        else {
            alert(`Is not possible to use ${num}`);
            document.getElementById("num").value = "";
        }
    }

    if(num >= 0 && num <= 99999999) {
        container.innerHTML = `The letter of your id is: ${letters[remainder]}`;
    }
}