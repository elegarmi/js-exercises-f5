let container = document.getElementById("container");
let phrase = prompt("Enter a phrase");
let regex = /[aeiou]/ig;
let result = phrase.match(regex);

container.innerHTML = result;

