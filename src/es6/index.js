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

// Parámetros en objetos, asignar valores a objetos a partir de una variable
let name = 'Ana';
let age = 30;
obj = {name, age}
console.log(obj);

// arroy functions, ejemplo obtener nombres, las arrow function son funciones anónimas
const names = [
  {name: 'Ana', age: 30},
  {name: 'Oscar', age: 32}
]
let listOfNames = names.map(item => console.log(item.name));

const listOfNames2 = (name, age, country) => {
  ...
};
// -- si tengo un solo parámetro
const listOfNames3 = name => {
  ...
}
// -- otra forma
const square = num => num * num;