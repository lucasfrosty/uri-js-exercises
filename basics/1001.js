var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

console.log(`X = ${a + b}`);