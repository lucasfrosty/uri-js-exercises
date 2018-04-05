var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let [code1, num1, valueOf1] = lines.shift().split(' ');
let [code2, num2, valueOf2] = lines.shift().split(' ');

num1 = Number(num1);
num2 = Number(num2);
valueOf1 = Number(valueOf1);
valueOf2 = Number(valueOf2)



console.log(`VALOR A PAGAR: R$ ${(num1 * valueOf1 + num2 * valueOf2).toFixed(2)}`);