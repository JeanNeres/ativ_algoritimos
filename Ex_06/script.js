// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu 
// sucessor.
// Ex: 
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

let num = prompt('Digite um numero');
let ant = parseInt(num) - 1;
let suc = parseInt(num) + 1;

alert("O antecessor de " + num + " é " + ant + " e o sucessor é! " + suc );