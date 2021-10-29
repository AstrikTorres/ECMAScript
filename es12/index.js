// ReplaceAll

const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';
const replacedString = string.replace('JavaScript', 'Python');
console.log(replacedString)

const replacedString2 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString2)

/* -------------------------------------------------- */
// Métodos privados

class Message {
    #show(val) { // Con el # convertimos al método en privado
        console.log(val);
    };
    get #add(val) {
        // code...
    }
}

const message = new Message();
message.show('Hola!');

/* -------------------------------------------------- */
// Promise Any

const proimise1 = new Promise((resolve, reject) => reject('1'));
const proimise2 = new Promise((resolve, reject) => resolve('2'));
const proimise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([proimise1, proimise2, proimise3])
.then(response => console.log(response))

// WeakRef(element);

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    // code...
}

// Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);