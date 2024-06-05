function applyDiscount(price, discount = 10) {
    return price - (price * discount / 100)
}

console.log(applyDiscount(100, 20))
console.log(applyDiscount(100))