const urlParams = new URLSearchParams(window.location.search);
const urlItem = '/item/';

let protocolId = urlParams.get("id");
let stageID = urlParams.get("stageID");
let itemList =[]

fetch(urlItem)
.then((response) => response.json())
.then((data) => {
    const newParagraph = document.getElementById('preview');
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].ID_Etapa, stageID)
        if (data[i].ID_Etapa == stageID) {
            itemList.push(data[i].valor);
        }
    }
    newParagraph.innerHTML = itemList.join('');
})
.catch((error) => {
    console.error('An error occurred while fetching item data:', error);
});

function sendReseacher(){
    var elemento = document.getElementById('preview');
    var conteudo = elemento.innerHTML;

    const textNewProtocol = `<form id="container" name="formNewForm" method="post" action="/protocolo/insereProtocolo">
    <h1 class="titleString">CRIAR NOVO PROTOCOLO</h1>
    <input name="nome" id="stageName" class="inputProtocol" type="text" placeholder="    Nome do novo protocolo" required><br>
    <input type="hidden" class="inputProtocol" name="status" value="0">
    <input type="hidden" name="lastID" value="${lastID}">
    <button class="nextButton" type="submit">Criar</button>
    </form>`
      // Defines a constant to store the ID of the structure that will receive the div
    const newParagraph = document.getElementById('preview')
    // Appends each value in the "stagesList" list to the HTML
    newParagraph.innerHTML = textNewProtocol;
}