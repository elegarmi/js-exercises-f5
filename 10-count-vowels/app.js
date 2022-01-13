let container = document.getElementById("container");
let phrase = prompt("Enter a phrase");
let regex = /[aeiou]/ig;
let vowels = phrase.match(regex);

container.innerHTML = `There are ${vowels.length} vowels in this phrase`;