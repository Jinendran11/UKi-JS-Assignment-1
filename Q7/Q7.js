const person = createPerson('John', 25)

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
        }
    }
}
person.greet()