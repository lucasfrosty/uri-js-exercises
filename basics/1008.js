var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const seller = lines.shift();
const hoursOfWork = parseInt(lines.shift());
const salaryPerHour = parseFloat(lines.shift());


console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${(hoursOfWork * salaryPerHour).toFixed(2)}`);