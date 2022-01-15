let container = document.getElementById("container");
let num = parseInt(prompt('Enter your qualification'));

if(num <= 10) {
    if(num > 0 && num < 3) {
        container.innerHTML = "Too poor";
    }
    
    if(num >= 3 && num < 5) {
        container.innerHTML = "Below average";
    }

    if(num == 5) {
        container.innerHTML = "Fair";
    }

    if(num == 6) {
        container.innerHTML = "Good";
    }

    if(num >= 7 && num < 9) {
        container.innerHTML = "Merit";
    }

    if(num >= 9 && num < 10) {
        container.innerHTML = "Distinction";
    }
}

if(num > 10) {
    document.write("This qualification is not valid");
}