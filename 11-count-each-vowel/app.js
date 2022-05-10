let container = document.getElementById("container")
let phrase = prompt("Enter a phrase")
let regex = /[aeiou]/ig
let lowerPhrase = phrase.toLowerCase()
let vowels = lowerPhrase.match(regex)
let countVowels = vowels.reduce((countVowels, vowels) => {
    countVowels[vowels] ? countVowels[vowels] = countVowels[vowels] + 1 : countVowels[vowels] = 1

    return countVowels

}, {})

container.innerHTML = `There are ${vowels.length} vowels in this phrase: <br>`

Object.entries(countVowels).forEach(entry => {
    const key = entry[0]
    const value = entry[1]

    container.innerHTML += `${key}: ${value} <br>`
})