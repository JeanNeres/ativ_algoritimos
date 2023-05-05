// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

let altura = prompt('Digite a altura');
let largura = prompt('Digite a largura');
let calc = altura * largura;
let qtd = calc / 2;

alert('A área total da parede é ' + calc + ' A quantidade de tinha para pintar a parede é  ' + qtd + ' latas' );
 