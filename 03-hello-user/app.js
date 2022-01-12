let container = document.getElementById("container");
let user = prompt("Please enter your name", "Ada Lovelace");

if (user != null) {
    container.innerHTML = "Hello " + user;
}