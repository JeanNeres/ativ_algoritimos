// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um 
// fumante. Pergunte a quantidade de cigarros fumados por dia e quantos anos ele 
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule 
// quantos dias de vida um fumante perderá e exiba o total em dias .

let cigarroPorDia = prompt('Quantos cigarros você fuma por dia?');
let anosFumando = prompt('A quantos anos você já fumou?');
let perda = 10;
let totalCigarros = cigarroPorDia * anosFumando * 365;
let minPerdidos = totalCigarros * 10;
let diasPerdidos = parseInt(minPerdidos / 1440);

alert('A quantidade de dias perdidos é de ' + diasPerdidos + ' Dias.')



