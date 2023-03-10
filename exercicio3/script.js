console.log(`--- Ranking dos 5 maiores paises ---`)

let maioresPaises = ['Rússia', 'Canada', 'China', 'EUA', 'Brasil'];

for(let i of maioresPaises){

    let indice = maioresPaises.indexOf(i)

    console.log(`${indice + 1}º ${i}`)

}