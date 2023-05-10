// 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o 
// seu novo salário, com 15% de aumento

let salario =  prompt('Digite o seu salário');
let aumento = 15;
let aumentoSalario = salario * aumento / 100;
let novoSalario = parseFloat(salario) + aumentoSalario;

alert ('O salario com aumento de ' + aumento + '% é de ' + novoSalario)

