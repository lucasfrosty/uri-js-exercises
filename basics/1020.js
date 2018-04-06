var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let num = parseInt(lines.shift());
let years = months = days = 0;

while (num !== 0) {
  if (num >= 365) {
    years++;
    num = num - 365;
  } else if (months >= 30) {
    months++;
    num = num - 30;
  } else {
    days++;
    num = num - 1;
  }
}

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);