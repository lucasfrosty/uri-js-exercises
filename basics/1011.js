var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const radius = parseFloat(lines.shift());
const PI = 3.14159;

console.log(`VOLUME = ${((4/3) * PI * (radius ** 3)).toFixed(3)}`);