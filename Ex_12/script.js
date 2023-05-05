// 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu 
// PREÇO PROMOCIONAL, com 5% de desconto

let produto = prompt('Digite o preço do produto');
let desconto = 5;
let calc_promo = parseFloat(produto) * parseFloat(desconto) / 100;
let calc_com_desconto = parseFloat(produto) - calc_promo; 

alert("O produto com " + desconto + "% de desconto sai a : " + calc_com_desconto );