var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let [A, B, C, D] = lines.shift().split(' ');
[A, B, C, D] = [Number(A), Number(B), Number(C), Number(D)];

if (
  (B > C)
  && (D > A)
  && (C + D) > (A + B)
  && C > 0
  && D > 0
  && A % 2 === 0
) {
  console.log('Valores aceitos');
} else {
  console.log('Valores nao aceitos');
}