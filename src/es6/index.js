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

// arrow functions, ejemplo obtener nombres, las arrow function son funciones anónimas
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

// Promesas, Js no es sincrónico. Ejecuta elemento por elemento. Para manejar el asincronismo por ejemplo llamar una api, las promesas indican que algo va a pasar
// necesita 2 elementos, result o reject

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    // espera una lógica a resolver
    if (true) {
      resolve('Todo bien');
    } else {
      reject('No funcionó');
    }
  })
}
// se pueden anida varios elementos them
helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

// Clases, una forma más fácil de manejar objetos y la herencia dentro de javascript
class calculator {
  //-- asignar un constructor para inicializar la clase, variables que estarán en un scope global
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  //-- metodo suma
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// Módulos, import y export
import hello from './module.js';
console.log(hello());