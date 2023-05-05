// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores 
// relativos em outras medidas.
// Ex: 
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

let num = prompt('Digite a distancia em metros');

alert('A distancia de ' + num + '  corresponde a: ' + num / 1000 + ' KM');
alert('A distancia de ' + num + '  corresponde a: ' + num / 100 + ' HM');
alert('A distancia de ' + num + '  corresponde a: ' + num / 10 + ' DAM');
alert('A distancia de ' + num + '  corresponde a: ' + num * 10 + ' DM');
alert('A distancia de ' + num + '  corresponde a: ' + num *100 + ' CM');
alert('A distancia de ' + num + '  corresponde a: ' + num * 1000 + ' MM');
