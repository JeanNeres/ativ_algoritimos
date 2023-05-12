// 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não 
// BISSEXTO.

function anoBissexto(){
    let year = prompt('Digite um ano');
    let ano = parseInt(year);

    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0  ){

        alert('O ano ' + ano + ' é bissexto.');
    }else {
        alert(' O ano ' + ano + " não é bissexto.");
    }

}

anoBissexto();

