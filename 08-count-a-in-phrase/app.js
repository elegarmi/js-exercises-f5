let container = document.getElementById("container");
let phrase = prompt("Enter a phrase");
let regex = /a/ig;
let allA = phrase.match(regex);
let result = allA.length;

container.innerHTML = `There are ` + result + ` a in this phrase`;