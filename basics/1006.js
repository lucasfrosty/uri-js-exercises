var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());

const MEDIA = ((A * 2 + B * 3 + C * 5) / 10).toFixed(1);

console.log(`MEDIA = ${MEDIA}`);