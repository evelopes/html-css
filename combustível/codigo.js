var total = document.getElementById("valores").value;

//  console.log(lista[0][0]) // nome do carro último 751)
//  console.log(lista[0][1]) // combustivel
//  console.log(lista[0][2]) // value

let valorCombustivel = 5;

totalCombustivel(14);

function totalCombustivel(valor) {
  let litros = parseInt(lista[valor][1]);
  let tanque = total * litros;
  let gasto = valorCombustivel * tanque;
  alert(gasto);
}
