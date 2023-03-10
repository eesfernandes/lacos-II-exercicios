let num = parseInt(prompt(`Digite um número para ver a sua tabuada: `));

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i in arrayNum){

    console.log(`${num} x ${arrayNum[i]} = ${num * arrayNum[i]}`)

}