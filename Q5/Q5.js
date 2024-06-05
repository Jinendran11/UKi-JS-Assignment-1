function sumOfSquaredNumbers(array) {
    return array.filter(item => typeof item === 'number')
                .reduce((sum, num) => sum + num * num, 0)
}

const array = [4, 'hello', 3, true, 'Uki', 5]
console.log(sumOfSquaredNumbers(array))