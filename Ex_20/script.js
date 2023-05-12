// 20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou 
// ÍMPAR.

function par_Ou_Impar(){
    let num = prompt('Digite um número inteiro');
    parseInt(num);

    if(num % 2 === 0){
        alert('O número ' + num + ' é par.');
    }else{
        alert('O número ' + num + ' é impar');
    }
    
}
par_Ou_Impar();