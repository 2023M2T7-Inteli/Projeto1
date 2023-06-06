const protocolNameUrl = '/protocolo/'; 
const mainContainer = `<div id="container"></div>`

let protocolsList = []
let protocolsListID = []
let activeProtocolsList = [`<h1 class="titleString">ATIVOS</h1>`]

fetch(protocolNameUrl)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      protocolsList.push(data[i].nome)
      protocolsListID.push(data[i].ID_Protocolo)
    }
  })
  .catch((error) => {
    console.error('An error occurred while fetching login data:', error);
});

function newProtocol(){
  const textNewProtocol = `<form id="container" name="formNewForm" method="post" action="/protocolo/insereProtocolo">
  <h1 class="titleString">CRIAR NOVO PROTOCOLO</h1>
  <input name="nome" id="stageName" class="inputProtocol" type="text" placeholder="Nome do novo protocolo" required>
  <input type="text" class="inputProtocol" name="status" placeholder="Status do novo protocolo">
  <button class="nextButton" type="submit">Criar</button>
  </form>`
  // Defines a constant to store the ID of the structure that will receive the div
  const newParagraph = document.getElementById('content')
  // Appends each value in the "stagesList" list to the HTML
  newParagraph.innerHTML = textNewProtocol;
}

function activeProtocols() {
  const newParagraph = document.getElementById('content');
  newParagraph.innerHTML = mainContainer;

  for (let i = 0; i < protocolsList.length; i++) {
    const textNewProtocol = `<button onclick="getProtocol(this)" class="mainButton" value="${protocolsListID[i]}">${protocolsList[i]}</button>`;
    activeProtocolsList.push(textNewProtocol);
    // Defines a constant to store the ID of the structure that will receive the div
    const containerSelect = document.getElementById('container');
    // Appends each value in the "stagesList" list to the HTML
    containerSelect.innerHTML = activeProtocolsList.join('');
  }
}

function getProtocol(button) {
  const protocolID = button.value;
  window.location.href = "../html/newForm.html?id=" + protocolID;
}
