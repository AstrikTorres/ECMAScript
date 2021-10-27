// Object.entries

const data = {
    frontend: 'Astrik',
    backend: 'Luis',
    design: 'Felipe',
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

/* ------------------------------------------------------*/
// Object.values

const data = {
    frontend: 'Astrik',
    backend: 'Luis',
    design: 'Felipe',
}

const values = Object.values(data);
console.log(values)


/* ------------------------------------------------------*/
// Pading

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));