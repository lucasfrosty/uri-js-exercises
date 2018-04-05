var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let [x1, y1] = lines.shift().split(' ');
let [x2, y2] = lines.shift().split(' ');

[x1, x2, y1, y2] = [Number(x1), Number(x2), Number(y1), Number(y2)];

const aux = ((x2 - x1) ** 2) + ((y2 - y1) ** 2);

console.log(`${Math.sqrt(aux).toFixed(4)}`);