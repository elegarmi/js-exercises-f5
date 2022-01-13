let container = document.getElementById("container");
let phrase = prompt("Enter a phrase");
let regex = /[aeiou]/ig;
let vowels = phrase.match(regex);
let allA = [];
let allE = [];
let allI = [];
let allO = [];
let allU = [];

vowels.forEach(vowel => {
    if(vowel.toLowerCase() === 'a') { allA.push(vowel); }
    if(vowel.toLowerCase() === 'e') { allE.push(vowel); }
    if(vowel.toLowerCase() === 'i') { allI.push(vowel); }
    if(vowel.toLowerCase() === 'o') { allO.push(vowel); }
    if(vowel.toLowerCase() === 'u') { allU.push(vowel); }
});

container.innerHTML = `There are ${vowels.length} vowels in this phrase, of which: <br>`;
container.innerHTML += `${allA.length} are a <br>`;
container.innerHTML += `${allE.length} are e <br>`;
container.innerHTML += `${allI.length} are i <br>`;
container.innerHTML += `${allO.length} are o <br>`;
container.innerHTML += `${allU.length} are u <br>`;