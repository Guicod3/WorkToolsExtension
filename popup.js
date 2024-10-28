document.getElementById('toFill').addEventListener('click', async () => {
    start()
})


async function start(){
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: preencherCampos,
    })
} 

function preencherCampos(){
    const lista = document.querySelectorAll('#listaAtributosProdutoMapeamento tr')
    lista.forEach(item => {
        const ValorParaCopiar = item.querySelector('input[type="text"]').value
        const CampoParaPreencher = item.querySelector('td.form-group input[type="text"]')
        CampoParaPreencher.value = ValorParaCopiar
    })
}


