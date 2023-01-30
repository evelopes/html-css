function devolveResultado() {

    const linkBrasil = "https://webservices.amazon.com.br/paapi5/scratchpad/index.html";
    const partnerTag = "ofertasespeciais-20";
    const accessKey = "AKIAJCC572MNJPJFBLJA";
    const secretKey = "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";


    let chave = "&api_key=UTxsLjgPTQZfCVXDaJ9GkWGtKZr4UYafK3C9t7g9";
    let nomeCamera = "MASTRO";
    const recebeDados = fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${nomeCamera}${chave}`);



    recebeDados.then(resposta => resposta.json())
        .then(r => {
            if (r.erro) {
                throw Error('Não foi possivel responder a requisição')
            } else {

                console.log(r)


            }

        }
        })
        .catch (erro => console.log(erro));

}

