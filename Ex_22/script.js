// 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua 
// situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o 
// alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do 
// alistamento.

//AGORA ALEM DA FUNÇÃO ESTOU ADICIONANDO TAMPLETE STRINGS NO CODIGO



function alistamento(){
    const nascimento = prompt('Digite o seu ano de nascimento');
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const idade = anoAtual - nascimento;

    if (idade < 18){
        const anosFaltantes = 18 - idade;
        alert(`Faltam ${anosFaltantes} anos para o alistamento.`)
    }else if(idade === 18 ){
        alert('Está na idade de se alistar.')
    }else{
        const anosPassados = idade - 18;
        alert(`Já se passaram ${anosPassados} anos do alistamento.`);
    }
    
}
alistamento();