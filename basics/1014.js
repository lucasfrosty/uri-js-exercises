var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const distance = parseFloat(lines.shift());
const fuelConsumption = parseFloat(lines.shift());

console.log(`${(distance / fuelConsumption).toFixed(3)} km/l`);