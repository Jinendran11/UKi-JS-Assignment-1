const strings = ["hello", "", "world", "", "javascript"]

function removeEmptyStrings(strings) {
    return strings.filter (str => str !== "")
}

console.log(removeEmptyStrings(strings))