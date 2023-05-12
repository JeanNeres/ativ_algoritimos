// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.

function calcularIdade() {
    
  var anoNascimento = prompt("Qual o ano do seu nascimento?");
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var idade = anoAtual - anoNascimento;

  if (idade >= 16) {
    alert("Você pode votar!");
  } else {
    alert("Você ainda não tem idade para votar!");
  }

  
}
calcularIdade();

