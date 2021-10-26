// Default Params

function newFunction(name, age, country) {
    var name = name || 'Astrik';
    var age = age || 19;
    var country = country || 'MX';
    console.log(name, age, country);
}

// ES6
function newFunction2(name = 'Astrik', age = 19, country = 'MX') {
    console.log(name, age, country);
}

newFunction2(); // Astrik 19 MX
newFunction2("Oscar", 32, "CO"); // Oscar 32 CO

/* ------------------------------------------------------ */
// Template Literals

let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase); // Hello World

// ES6
let epicPhrase2 = `${hello} ${world}`; 
console.log(epicPhrase2); // Hello World

/* ------------------------------------------------------ */
// Multiline Strings

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n" +
"Vestibulum eget nisl euismod, porttitor nisl eu, aliquam nisi. \n";

// ES6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum eget nisl euismod, porttitor nisl eu, aliquam nisi.`;

console.log(lorem);
console.log(lorem2);

/* ------------------------------------------------------ */
// destructure

let person = {
    'name': 'Astrik',
    'age': 19,
    'country': 'MX'
};

console.log(person.name, person.age, person.country); // Astrik 19 MX

// ES6
let { name, age, country } = person;
console.log(name, age, country); // Astrik 19 MX

/* ------------------------------------------------------ */
// Spread Operator

let team1 = ['Astrik', 'Oscar', 'Juan'];
let team2 = ['Henry', 'Jose', 'Elio'];

let education = ['David', ...team1, ...team2];
console.log(education); // David Astrik Oscar Juan Henry Jose Elio

/* ------------------------------------------------------ */
// object properties

let name = 'Astrik';
let age = 19;

// ES5
obj = { name: name, age: age };
console.log(obj); // { name: 'Astrik', age: 19 }

// ES6
obj2 = { name, age };
console.log(obj2); // { name: 'Astrik', age: 19 }

/* ------------------------------------------------------ */
// Arrow Functions

const names = [
    { name: 'Juan', age: 12 },
    { name: 'Oscar', age: 14 },
    { name: 'Jose', age: 13 }
];

let listOfNames = names.map(function(item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

let listOfNames3 = (name, age, country) => {
    // code...
};

const listOfNames4 = name => {
    // code...
};

const square = num => num * num;

/* ------------------------------------------------------ */
// Promises

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

/* ------------------------------------------------------ */
// Classes

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

/* ------------------------------------------------------ */
// Import and export

import { hello } from './module';

hello();

/* ------------------------------------------------------ */
// generators

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);