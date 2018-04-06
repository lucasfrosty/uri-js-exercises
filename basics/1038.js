var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let [codeItem, amountItem] = lines.shift().split(' ');
[codeItem, amountItem] = [Number(codeItem), Number(amountItem)];

const prices = [4.00, 4.50, 5.00, 2.00, 1.50];

console.log(`Total: R$ ${(prices[codeItem - 1] * amountItem).toFixed(2)}`);