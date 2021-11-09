const input = require("readline-sync");

console.log("== Olá seja bem vindo. ==");
const idade = input.question("Qual a sua idade?");

if (idade >=18 && idade <21) {
    console.log("Pode entrar, porém não pode beber ")
} else if (idade >=21) {
    console.log("Pode entrar e beber ")

} else {
    console.log("Não pode entrar, nem beber")
}