// Parámetros por defecto en funciones
function newFunction (name = 'Ana', age=30, country='GT') {
  console.log(name, age, country);
}

newFunction();

// Template literals, permiten unir varios elementos
let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

// Multilínea
let lorem = `Una frase épica
que necesitamos`;
console.log(lorem);

// Destructuración
let person = {
  'name' : 'Ana',
  'age' : 30,
  'country' : 'GT'
}
let {name, age, country} = person;
console.log(name, age, country);

const animales = ["🐒","🦊","🐥"];
const [mono, zorro, pollo] = animales;
console.log(mono, zorro, pollo);

// -- valores de retorno, con un valor  por defecto
function ropa () {
  return ["🧤","👔","🧣"];
}
let [guantes, camisa, bufanda, zapato = "👟"] = ropa();
console.log(guantes, camisa, bufanda, zapato);

// Operador de progagación o Spread Operator
let team = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Ana', 'Valeria', 'Camila'];

let education = ['David', ...team, ...team2];
console.log(education);