function inventoryValue(products) {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0)
}

const products = [
    { name: 'Laptop', price: 1000, quantity: 5 },
    { name: 'Phone', price: 500, quantity: 10 }
]
console.log(inventoryValue(products))