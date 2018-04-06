const num = 100;

if (num > 100 || num < 0) {
  console.log('Fora de intervalo');
} else if (num <= 25.00) {
  console.log('Intervalo [0, 25]');
} else if (num <= 50.00) {
  console.log('Intervalo (25, 50]');
} else if (num <= 75.00) {
  console.log('Intervalo (50, 75]');
} else if (num <= 100) {
  console.log('Intervalo [75, 100]');
}