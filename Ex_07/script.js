// 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a 
// sua terça parte.
// Ex: 
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

let num = prompt('Digite um numero real');
let dobro = parseFloat(num) * 2;
let terca = parseFloat(num) / 3;

alert('O dobro de ' + num + " é " + dobro + " e a terça parte é " + terca);
