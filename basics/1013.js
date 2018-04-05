var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let [A, B, C] = lines.shift().split(' ');
const arr = [Number(A), Number(B), Number(C)];

console.log(`${Math.max(...arr)} eh o maior`);