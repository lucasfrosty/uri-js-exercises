var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());

const MEDIA = (((A * 3.5) + (B * 7.5)) / 11).toFixed(5);

console.log(`MEDIA = ${MEDIA}`);