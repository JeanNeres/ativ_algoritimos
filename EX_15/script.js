// 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o 
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 
// por hora trabalhada


let diasTrabalhados = prompt('Digite a quantidade de dias trabalhados no mês');
let qtdHoras = 8;
let valorHora = 25;
let valorDia = qtdHoras * valorHora;
let calcSalario = parseFloat(valorDia) * diasTrabalhados;

alert('A quantidade de dias trabalhados é de ' +  diasTrabalhados + ' dias,  o valor da diaria é de R$' + valorDia + ' reais, e o valor total do salário é de R$' + calcSalario + ' reais.' )

