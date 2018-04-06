var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let num = parseInt(lines.shift());
let hours = minutes = seconds = 0;

while (num !== 0) {
  if (num >= 3600) {
    hours++;
    num = num - 3600;
  } else if (num >= 60) {
    minutes++;
    num = num - 60;
  } else {
    seconds++;
    num = num - 1;
  }
}

console.log(`${hours}:${minutes}:${seconds}`);