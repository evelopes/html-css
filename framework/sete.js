const objeto = {}

objeto["chave"] = 2

console.log(objeto.chave)

console.log(objeto["chave"])

const array = [0, 1]

array[5] = "8"

console.log(array[5])

// opções:
// Ocorrerá erro na linha 2
// Ocorrerá erro na linha 3
// Ocorrerá erro na linha 6
Irá imprimir 2 / 2 / 8
// Irá imprimir 2 / undefined / 8