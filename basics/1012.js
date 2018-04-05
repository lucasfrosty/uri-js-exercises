var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let [A, B, C] = lines.shift().split(' ');

A = Number(A);
B = Number(B);
C = Number(C);


console.log(`TRIANGULO: ${((A * C) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(3.14159 * (C ** 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((A + B) * C) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(B * B).toFixed(3)}`);
console.log(`RETANGULO: ${(A * B).toFixed(3)}`);