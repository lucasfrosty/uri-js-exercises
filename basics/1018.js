var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const num = parseInt(lines.shift());

let aux = num;
let counter100 = counter50 = counter20 = counter10 = counter5 = counter2 = counter1 = 0;

while (aux !== 0) {
  if (aux >= 100) {
    counter100++;
    aux = aux - 100;
  } else if (aux >= 50) {
    counter50++;
    aux = aux - 50;
  } else if (aux >= 20) {
    counter20++;
    aux = aux - 20;
  } else if (aux >= 5) {
    counter5++;
    aux = aux - 5;
  } else if (aux >= 2) {
    counter2++;
    aux = aux - 2;
  } else {
    counter1++;
    aux = aux - 1;
  }
}

console.log(num);
console.log(`${counter100} nota(s) de R$ 100,00`);
console.log(`${counter50} nota(s) de R$ 50,00`);
console.log(`${counter20} nota(s) de R$ 20,00`);
console.log(`${counter10} nota(s) de R$ 10,00`);
console.log(`${counter5} nota(s) de R$ 5,00`);
console.log(`${counter2} nota(s) de R$ 2,00`);
console.log(`${counter1} nota(s) de R$ 1,00`);