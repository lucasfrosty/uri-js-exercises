var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let [A, B, C] = lines.shift().split(' ');
[A, B, C] = [Number(A), Number(B), Number(C)];
const delta = (B ** 2) - (4 * A * C);

if (A === 0 || delta < 0) {
  console.log('Impossivel calcular');
} else {
  const r1 = (((-B) + Math.sqrt(delta)) / (2 * A)).toFixed(5);
  const r2 = (((-B) - Math.sqrt(delta)) / (2 * A)).toFixed(5);
  
  console.log(`R1 = ${r1}`);
  console.log(`R2 = ${r2}`);
}