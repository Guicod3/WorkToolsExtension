async function preencherCampos(){
    const result = await chrome.tabs.query({active: true, currentWindow: true});

    const [tab] = document.querySelectorAll('#listaAtributosProdutoMapeamento tr')

}