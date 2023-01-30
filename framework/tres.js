Observe o código abaixo e responda:

var assert = require('assert');

var arr = [6, 10, 4, 21, 9, 0, 53],
    iMaior = 0,
    iMenor = 0,
    i = 0;

//
// Sua lógica
//
for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[iMaior]) {
        iMaior = i;
    }


    if (arr[i] < arr[iMenor]) {
        iMenor = i;
    }

}

// opções:
// O algoritmo é responsável por enumerar o Vetor.
// O algoritmo é reponsável por ordenar o Vetor.
// O algoritmo não funciona.
O algoritmo apresenta os indices do maior e do menor valor.