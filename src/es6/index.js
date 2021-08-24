// Parámetros por defecto en funciones
function newFunction (name = 'Ana', age=30, country='GT') {
  console.log(name, age, country);
}

newFunction();

// Template literals, permiten unir varios elementos
let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase)