// PASSO 02 - CONDIÇÕES BÁSICAS
// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

const velocidade = prompt('Qual a velocidade do veiculo? ');
 

if(velocidade > 80 ){

    let valor_multa = (velocidade - 80) * 5;

    alert('Você foi multado!' );
    alert('O valor total da sua multa é de  R$' + valor_multa.toFixed(2));
}else{
    alert('Você está no limite da velocidade permitida.')
}