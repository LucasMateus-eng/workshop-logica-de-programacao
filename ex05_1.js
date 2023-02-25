const prompt = require("prompt-sync")()

const idade = Number(prompt("Digite a sua idade: "))

function podeDirigir(idade) {
  if (idade >= 18) {
    return "Você pode dirigir"
  } else {
    return "Você não pode dirigir"
  }
}

console.log(podeDirigir(idade))