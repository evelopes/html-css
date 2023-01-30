const requestURL = '/assets/tarot-images.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {

}

function resposta() {
    let pergunta = document.getElementById("#pergunta").value;
    alert("pergunta.value")
}





