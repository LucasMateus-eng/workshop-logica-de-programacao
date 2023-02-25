const prompt = require("prompt-sync")()

function multiplica(num1, num2) {
  return num1 * num2
}

const num1 = Number(prompt("Digite o 1º número: "))
const num2 = Number(prompt("Digite o 2º número: "))

console.log("A multiplicação entre os dois números é: ", multiplica(num1, num2))