const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número inteiro: "))

function tabuada(numero) {
  if (!Number.isInteger(numero)) {
    console.log("O número deve ser do tipo inteiro")
    return
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`)
  }
}

tabuada(numero)