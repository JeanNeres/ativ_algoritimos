// 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva 
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a 
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, 
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado .

let kmPercorrido = prompt('Digite quantos km você percorreu');
let qtdDias = prompt('Digite a quantidade de dias');
let valorDia = 90;
let kmRodado = 0.20;
let valorTotal = (valorDia*qtdDias) + (kmRodado*kmPercorrido);

alert('o valor total de dias em que o carro foi alugado é de ' + qtdDias + ' e a quantidade de km percorridos é de ' + kmPercorrido + ' , o valor total do aluguel do veiculo é de R$' + valorTotal + '!')
