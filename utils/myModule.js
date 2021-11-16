function helloClass() {
    return "This is how we use node"
}

function goodbyeClass() {
    return "This is another function"
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

const person = {
    name: "Jacob",
    age: 25,
    foods: ["tacos", "macaroni"],
    car: {
        name: "Tesla",
        model: "Model 3",
        year: 2020
    }
}

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age
        this.introduction = function () {
            return "Hi";
        }
    }
}

module.exports = {
    hello: helloClass,
    goodbye: goodbyeClass,
    add: addNumbers,
    human: Human,
    person
}
