// 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre 
// na tela a sua média na disciplina.
// Ex: 
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

let nota1 = prompt('Digite a primeira nota');
let nota2 = prompt('Digite a segunda nota');
let nota3 = prompt('Digite a terceita nota');
let media = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) / 2;

alert('A média entre as notas ' + nota1 + "," + nota2 + "," + nota3 + " É de " + media );