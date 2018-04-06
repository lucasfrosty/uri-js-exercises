var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let num = parseFloat(lines.shift()).toFixed(2);
let counter100 = counter50 = counter20 = counter10 = counter5 = counter2 = counter1 = coin1 = coin50 = coin25 = coin10 = coin05 = coin01 = 0;

while (num != 0) {
  if (num >= 100) {
    counter100++;
    num = (num - 100).toFixed(2);
  } else if (num >= 50) {
    counter50++;
    num = (num - 50).toFixed(2);
  } else if (num >= 20) {
    counter20++;
    num = (num - 20).toFixed(2);
  } else if (num >= 10) {
    counter10++;
    num = (num - 10).toFixed(2);
  } else if (num >= 5) {
    counter5++;
    num = (num - 5).toFixed(2);
  } else if (num >= 2) {
    counter2++;
    num = (num - 2).toFixed(2);
  } else if (num >= 1) {
    coin1++;
    num = (num - 1).toFixed(2);
  } else if (num >= 0.50) {
    coin50++;
    num = (num - 0.50).toFixed(2);
  } else if (num >= 0.25) {
    coin25++;
    num = (num - 0.25).toFixed(2);
  } else if (num >= 0.10) {
    coin10++;
    num = (num - 0.10).toFixed(2);
  } else if (num >= 0.05) {
    coin05++;
    num = (num - 0.05).toFixed(2);
  } else if (num >= 0.01) {
    coin01++;
    num = (num - 0.01).toFixed(2);
  }
}

console.log('NOTAS:');
console.log(`${counter100} nota(s) de R$ 100.00`);
console.log(`${counter50} nota(s) de R$ 50.00`);
console.log(`${counter20} nota(s) de R$ 20.00`);
console.log(`${counter10} nota(s) de R$ 10.00`);
console.log(`${counter5} nota(s) de R$ 5.00`);
console.log(`${counter2} nota(s) de R$ 2.00`);

console.log('MOEDAS:');
console.log(`${coin1} moeda(s) de R$ 1.00`);
console.log(`${coin50} moeda(s) de R$ 0.50`);
console.log(`${coin25} moeda(s) de R$ 0.25`);
console.log(`${coin10} moeda(s) de R$ 0.10`);
console.log(`${coin05} moeda(s) de R$ 0.05`);
console.log(`${coin01} moeda(s) de R$ 0.01`);