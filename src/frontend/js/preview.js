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