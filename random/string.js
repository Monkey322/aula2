//aprendendo a contatenar

/*console.log("hallo" + ' ' + "Welt")



console.log("hallo" + "welt")

myName = "Otavio"

console.log("hallo" + " " + myName)

myname2 = 2

console.log("Hallo" + myName2)*/

// ------------------------------

/*var x=0
y = "morango"
console.log(x, "\n" ,y)*/

/*let mes = 'fevereiro';
if (mes === "fevereiro") {
    console.log("Mes dele do Carnaval")

} else if (mes === "Junho") {
    console.log("Tem ele o São João")

} else if (mes === "Dezembro") {
    console.log("Mes do Natal")

} else {
    console.log( `${mes} Não é mês festivo` )
}*/

// =======================


const input = require('readline-sync');
console.log("bem vindo");


 const mes = input.question('Qual mes sera festivo?');

 if (mes === "feveiro") {
     console.log("Mes do carnaval");
 }
 else if (mes === "junho") {
     console.log('Mes do São João');

 }

 else if (mes === "abril") {
     console.log('Mes da pascoa');
}

else if (mes === "Dezembro") {
    console.log('Mes do natal') 
}

else {console.log(`${mes} não é um mes festivo`)
}