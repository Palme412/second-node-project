const numbers = [1,4,7,20];
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

console.log(numbers);
console.log(person.foods);

const somethingElse = require("./utils/myModule");

console.log(somethingElse);

somethingElse.hello();
console.log(somethingElse.hello());