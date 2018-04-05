var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const seller = lines.shift();
const fixedWage = parseFloat(lines.shift());
const salesPerMonth = parseFloat(lines.shift());


console.log(`TOTAL = R$ ${(fixedWage + (salesPerMonth * 0.15)).toFixed(2)}`);