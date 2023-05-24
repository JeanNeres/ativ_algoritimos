// 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua 
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou 
// não um bom aproveitamento (se ficou acima da média 7.0)

function media(){
    let nomeAluno = prompt('Digite o seu nome.');
    let nota1 = prompt('Digite a primeira nota');
    let nota2 = prompt ('Digite a segunda nota');
    let mediaNota = parseFloat(nota1) + parseFloat(nota2) / 2;

    if(mediaNota > 7){
        alert('Parabéns ' + nomeAluno + ' , a sua média é ' + mediaNota + ' , você está aprovado.')
    }
    else if(mediaNota < 7 && mediaNota > 5 ){
        alert('Olá ' + nomeAluno + ' , a sua média foi '  + mediaNota + ' , você quase conseguiu.');
    }else{
        alert('Olá ' + nomeAluno + ' , a sua média foi ' + mediaNota + ' , você não foi aprovado.'  )
    }

}
media();



