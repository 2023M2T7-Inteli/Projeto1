const urlParams = new URLSearchParams(window.location.search);
const urlEnvios = '/enviar/';
const urlProtocolos = '/protocolo/';
const urlEtapas = '/etapa/';

let protocolId = []
let ativos = []
let finalizados = []
let stagesList = [`<h1 class="tittleProtocols">Etapas</h1>`]
let itemList =[]
let userId;
let protocolIDButton;
let stageID;
let userEmail;

fetch(urlEnvios)
  .then((response) => response.json())
  .then((data) => {
    userId = urlParams.get("id");
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID_Usuario == userId) {
        protocolId.push(data[i].ID_Protocolo)
      }
    }
  })
  .catch((error) => {
    console.error('An error occurred while fetching protocol name:', error);
  });

fetch(urlProtocolos)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < protocolId.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j].ID_Protocolo == protocolId[i]) {
                if (data[j].status == 1){
                    ativos.push(`<button value="${data[j].ID_Protocolo}" onclick=getProtocol(this) class="myButton">${data[j].nome}</button> `)
                } else if (data[j].status == 0) {
                    finalizados.push(`<button  value="${data[j].ID_Protocolo}" onclick=getProtocol(this) class="myButton">${data[j].nome}</button> `)
                }
        }
        const newParagraphAtivos = document.getElementById('ativos');
        newParagraphAtivos.innerHTML = ativos.join('');

        const newParagraphFinalizados = document.getElementById('finalizados');
        newParagraphFinalizados.innerHTML = finalizados.join('');
        }
    }
  })
  .catch((error) => {
    console.error('An error occurred while fetching protocol name:', error);
  });

function getProtocol(button) {
    protocolIDButton = button.value;
    window.location.href = '../html/stepScreenProducer.html?id=' + protocolIDButton;
}

fetch(urlEtapas)
  .then((response) => response.json())
  .then((data) => {
    const newParagraph = document.getElementById('etapas');
    protocolId = urlParams.get("id");
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID_Protocolo == protocolId) {
        stagesList.push(`<button onclick=getStage(this) class="myButton" value="${data[i].ID_Etapa}">${data[i].nome}</button>`);
        //`<button onclick="getStage(this)" class="myButton" ></button>`
      }
    }
    newParagraph.innerHTML = stagesList.join('');

  })
  .catch((error) => {
    console.error('An error occurred while fetching stages data:', error);
  });

function getStage(button) {
    protocolId = urlParams.get("id");
    stageID = button.value
    window.location.href = '../html/protocolPreview.html?id=' + protocolId + '&stageID=' + stageID;
}