var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const timeSpendOnTrip = parseInt(lines.shift());
const averageSpeed = parseInt(lines.shift());

console.log((timeSpendOnTrip * averageSpeed / 12).toFixed(3));