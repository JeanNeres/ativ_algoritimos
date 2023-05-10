// 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o 
// seu novo salário, com 15% de aumento.


let salario = prompt('Digite o salário');
let aumento = 15;
let calculoAumento = parseFloat(salario) * parseFloat(aumento) / 100;
let salarioTotal = parseFloat(salario) +  calculoAumento;

alert('O valor total do slário de ' + salario + ' com 15% de aumento é de ' + salarioTotal + '!');

