const urlParams = new URLSearchParams(window.location.search);
const urlEtapas = '/etapa/';
const urlItem = '/item/';
const buttonSend = `<button class="buttonSend" type="submit"></button>`;
const protocolNameUrl = '/protocolo/';
const userSentUrl = '/enviar/'

let currentUrl = window.location.href
let correctName = false
let containerStructure = [];
let userSent = []
let protocolName;
let protocolId = urlParams.get("id");
let stageID = urlParams.get("idStage");
let itemList = [];
let leftBar = [`<h1>ITENS</h1>`, `<p>(Selecione o item que deseja adicionar ao protocolo)</p>`, `<form method="post" action="/item/insereItem" class="myButton">
<p>NOME</p>
<input name="valor" type="hidden" value='<div class="nameSection" id="nameSection">
  <button class="deleteButton">-</button>
  <input type="text" placeholder="INSIRA UM TÍTULO" class="inputTittle">
  <input class="putName" type="text">
</div>'>
<input type="hidden" name="ID_Etapa" value="${stageID}">
<input type="hidden" name="ID_Protocolo" value="${protocolId}">
<input type="hidden" name="currentUrl" value="${currentUrl}">
<button onclick="addName()" type="submit" class="addIcon">+</button>
</form>`, `<form method="post" action="/item/insereItem" class="myButton">
<p>DATA</p>
<input name="valor" type="hidden" value='<div class="dateSection" id="dateSection">
  <button class="deleteButton">-</button>
  <input type="text" placeholder="INSIRA UM TÍTULO" class="inputTittle"> 
  <input type="date" class="dateInput" name="dateSection" id="dateSection">
  </div>'>
  <input type="hidden" name="ID_Etapa" value="${stageID}">
  <input type="hidden" name="ID_Protocolo" value="${protocolId}">
  <input type="hidden" name="currentUrl" value="${currentUrl}">
<button onclick=addDate() type="submit" class="addIcon">+</button>
</form>`, `<form method="post" action="/item/insereItem" class="myButton">
<p>LOCAL</p>
<input name="valor" type="hidden" value='<div class="localSection" id="localSection">
  <button class="deleteButton">-</button>
  <input type="text" id="address" class="inputTittle" placeholder="Localização">
  <div id="map"></div>
</div>'>
<input type="hidden" name="ID_Etapa" value="${stageID}">
<input type="hidden" name="ID_Protocolo" value="${protocolId}">
<input type="hidden" name="currentUrl" value="${currentUrl}">
<button onclick=addLocal() type="submit" class="addIcon">+</button>
</form>`, `<form method="post" action="/item/insereItem" class="myButton">
<p>FOTO</p>
<input name="valor" type="hidden" value='<div class="photoSection" id="photoSection">
  <button class="deleteButton">-</button>
  <input type="file" class="inputTittle" onchange="showPreview()"><br>
  <img src="" alt="Pré-visualização da Imagem" height="200">
  </div>'>
  <input type="hidden" name="ID_Etapa" value="${stageID}">
  <input type="hidden" name="ID_Protocolo" value="${protocolId}">
  <input type="hidden" name="currentUrl" value="${currentUrl}">
<button onclick=addPhoto() type="submit" class="addIcon">+</button>
</form>`];
let stagesList = [`<div class="titleStages"><h1>ETAPAS</h1><span onclick="addStage()" class="addIconStage">+</span></div>`, `<p>(Selecione a etapa que deseja adicionar ao protocolo)</p>`];

window.onload = function() {
  stageID = urlParams.get("idStage");
};

fetch(protocolNameUrl)
  .then((response) => response.json())
  .then((data) => {
    protocolId = urlParams.get("id");
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID_Protocolo ==  protocolId) {
        protocolName = data[i].nome;
        correctName = true
      }
      else if (correctName == false){
        protocolName = data[data.length -1].nome;
      }
    }
    const newParagraph = document.getElementById("protocolname");
    newParagraph.innerHTML = protocolName;
  })
  .catch((error) => {
    console.error('An error occurred while fetching protocol name:', error);
  });

fetch(urlEtapas)
  .then((response) => response.json())
  .then((data) => {
    const newParagraph = document.getElementById('stageContainer');
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID_Protocolo == protocolId) {
        stagesList.push(`<button onclick="getStage(this)" class="myButton" value="${data[i].ID_Etapa}">${data[i].nome}</button>`);
      }
    }
    newParagraph.innerHTML = stagesList.join('');

    if (stagesList.length > 2){
      const newParagraphLeft = document.getElementById('leftBar')
      newParagraphLeft.innerHTML = leftBar.join('');
    }
  })
  .catch((error) => {
    console.error('An error occurred while fetching stages data:', error);
  });

function getStage(button) {
  stageID = button.value;
  window.location.href = `../html/newForm.html?id=${protocolId}&idStage=${stageID}`;
}

fetch(urlItem)
  .then((response) => response.json())
  .then((data) => {
    const newParagraph = document.getElementById('myContainer');
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID_Etapa == stageID) {
        itemList.push(data[i].valor);
      }
    }
    newParagraph.innerHTML = itemList.join('');
  })
  .catch((error) => {
    console.error('An error occurred while fetching item data:', error);
  });

function renderizeMap() {
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-46.73389029410068, -23.55588167341572]),
      zoom: 12
    })
  });

  var addressInput = document.getElementById('address');

  map.on('click', function (event) {
    var coordinate = event.coordinate;
    var lonlat = ol.proj.toLonLat(coordinate);
    addressInput.value = lonlat[1] + ', ' + lonlat[0];
  });
}

function showPreview() {
  var archive = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    var img = document.querySelector('img');
    img.src = reader.result;
  };

  if (archive) {
    reader.readAsDataURL(archive);
  } else {
    var img = document.querySelector('img');
    img.src = '';
  }
}

//Function that creates a div in the HTML for the researcher to customize how many stages the protocol will be able to

function addStage() {
  // Creates a constant that stores the structure to be added to the HTML
  const createStageText = `<form id="myContainer" class="myButtonNew" name="putStage" method="post" action="/etapa/insereEtapa">
  NOME: <input class="inputStage" type="text" name="nome" value="" required>
  <br>
  ATIVO: <input class="inputStage" type="number" name="status" value="" required>
  <br>
  <input type="hidden" name="ID_Protocolo" value="${protocolId}">
  <button class="buttonStage" type="submit">ENVIAR</button>
  </form>`
  stagesList.push(createStageText)
  // Defines a constant to store the ID of the structure that will receive the div
  const newParagraph = document.getElementById('stageContainer')
  newParagraph.innerHTML = stagesList.join('');
}

function sendProducer(){
  const textNewProtocol = `<form class="sendProducerForm" id="container" method="post" action="/enviar/insereEnviar">
  <h1 class="titleString">Enviar Para:</h1>
  <input name="ID_Usuario" id="stageName" class="inputProtocol" type="text" placeholder="ID do produtor" required>
  <input name="ID_Protocolo" type="hidden" value="${protocolId}">
  <input name="ID_Envio" type="hidden" value="${protocolId}">
  <input name="currentUrl" type="hidden" value="${currentUrl}">
  <button class="buttonSendProducer" type="submit">Enviar</button>
  </form>`
  // Defines a constant to store the ID of the structure that will receive the div
  const newParagraph = document.getElementById('main')
  // Appends each value in the "stagesList" list to the HTML
  newParagraph.innerHTML = textNewProtocol;

  
  fetch(userSentUrl)
  .then((response) => response.json())
  .then((data) => {
    protocolId = urlParams.get("id");
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID_Protocolo == protocolId) {
        userSent.push(`<div class="buttonUserSent">Usuário : ${data[i].ID_Usuario}</div>`)
      }
    }
    const newParagraphReceived = document.getElementById('producerReceived')
    newParagraphReceived.innerHTML = userSent.join('');
  })
  .catch((error) => {
    console.error('An error occurred while fetching protocol name:', error);
  });  
}
