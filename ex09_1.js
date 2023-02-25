const prompt = require("prompt-sync")()

const parametro = Number(prompt("Digite a quantidade de minutos: "))

function converterEmHoras(minutos) {
  const horas = minutos / 60

  if (Number.isInteger(horas)) {
    return `A quantidade, em horas, é: ${horas} h`
  }

  return `A quantidade, em horas, é: ${horas.toFixed(2)} h`
}

console.log(converterEmHoras(parametro))