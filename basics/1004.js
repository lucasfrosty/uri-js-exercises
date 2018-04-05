var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const PROD = A * B;

console.log(`PROD = ${PROD}`);