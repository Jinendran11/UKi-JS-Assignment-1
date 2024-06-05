const words = ["hello", "world", "javascript"]

function concatenateStrings(words) {
    return words.reduce((acc, word) => acc + " " + word)
}

console.log(concatenateStrings(words))