// 24) Faça um algoritmo que pergunte a distância que um passageiro deseja 
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para 
// viagens até 200Km e R$0.45 para viagens mais longas.

function valorPassagem(){
    const distancia = prompt('Qual a distância a ser percorrida?');
    

    if(distancia <= 200){
        const corridaCurta = 0.50 * parseInt(distancia);
        alert(`O valor final da corrida é de ${corridaCurta} R$`)
    }else{
        const corridaLonga = 0.45 * parseInt(distancia);
        alert(`O valor final da corrida é de ${corridaLonga} R$`)
    }
}
valorPassagem();