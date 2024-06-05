const numbers = [1, 2, 3, 4, 5, 6]

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0)
}
console.log(getEvenNumbers(numbers))