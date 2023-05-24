// 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
// para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
// que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto

function CalcularPromocao(){
    const nome = prompt('Digite o seu nome!');
    const sexo = prompt('Qual o seu sexo?');
    const valorCompra = prompt('Digite o valor da compra');
    

    if(sexo.toLowerCase() === 'masculino'){
        const descMasc = parseFloat(valorCompra) * 5 / 100; 
        alert(`O valor da compra com desconto para homens é ${valorCompra - descMasc} Reais`)
    }else if(sexo.toLowerCase() === 'feminino'){
        const descFem = parseFloat(valorCompra) * 13 /100;
        alert(`O valor da compra com desconto para mulheres é ${valorCompra - descFem} Reais`)
    }else{
       alert('Sexo inválido.');
        
    }

}
CalcularPromocao();