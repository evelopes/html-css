let Titulo = document.getElementById("titulo");
titulo.innerHTML = "Olá, Mundo de fantasias"  //titulo do documento

let conteudo = ""; //aqui vai a String gerada

let texto = document.getElementById("texto");

let nomes = ["Pedro ", "Enrique ", "Augusto ", "Wilson "] ;
let acoes = ["sussurou: ", "murmurou: ", "disse: ", "falou: "];
let frase = ["Você está perdido? ", "Você precisa virar a direita. ", "O caminho não é esse! ", "Devo estar perdido!"];


function valorAleatorio(){
    return Math.random();
}


criarFrase(nomes,acoes,frase)
function criarFrase(nome,ação,frase){
    for (let index = 0; index < nome.length; index++) {
        conteudo += nome[index] + ação[index] + frase[index];
        
    }
}

texto.innerHTML = conteudo ;  //texto do documento