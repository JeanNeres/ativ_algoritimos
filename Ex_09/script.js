// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

let dinheiro = prompt('Digite o valor em Reais');
let comprar = dinheiro / 5.01;

alert('o valor que ' + dinheiro + ' pode comprar de dólares é: ' + comprar);