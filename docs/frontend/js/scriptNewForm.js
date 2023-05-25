// Creates an empty list to store the structures of the forms created by researchers
let containerStructure = []
// Creates a list that will store the number of project stages with a default structure
let stagesList = [`<div class="titleStages"><h1>ETAPAS</h1><span onclick=addStage() class="addIconStage">+</span></div>`]

// Function that renders the map using the OpenLayers library
function renderizeMap() {
  // Creates a new OpenLayers Map object that will be rendered in the HTML element with the ID "map"
  var map = new ol.Map({
    target: 'map',
    layers: [
      // Adds a tile layer (responsible for displaying the map content as "tiles" or small rectangular images, which are organized and loaded in a grid to compose the complete map) using the OpenStreetMap source
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      // Sets the center of the map using longitude and latitude coordinates
      center: ol.proj.fromLonLat([-46.73389029410068, -23.55588167341572]),
      // Sets the initial zoom level of the map
      zoom: 12
    })
  });

  // Gets the address input element from the HTML with the ID "address"
  var addressInput = document.getElementById('address');

  // Adds a click event listener to the map
  map.on('click', function (event) {
    // Gets the coordinates of the click event
    var coordinate = event.coordinate;
    // Converts the map coordinates to longitude and latitude
    var lonlat = ol.proj.toLonLat(coordinate);

    // Updates the value of the address input with the coordinates in the "latitude, longitude" format
    addressInput.value = lonlat[1] + ', ' + lonlat[0];
  });
}

// Function that shows a preview of the photo to be uploaded by the producer
function showPreview() {
  // Gets the file selected by the user using the 'input[type=file]' selector
  var archive = document.querySelector('input[type=file]').files[0];
  // Creates an instance of FileReader to read the file content
  var reader = new FileReader();

  // Defines a function to be executed when the file reading is complete
  reader.onloadend = function () {
    // Gets a reference to the <img> element in the HTML
    var img = document.querySelector('img');
    // Sets the 'src' property of the image to the result of the file reading
    img.src = reader.result;
  }

  // Checks if a file has been selected by the user
  if (archive) {
    // If a file has been selected, starts reading the file content as a data URL
    reader.readAsDataURL(archive);
    // Se nenhum arquivo foi selecionado, define a propriedade 'src' da imagem como uma string vazia.
  } else {
    // If no file has been selected, sets the 'src' property of the image to an empty string  
    var img = document.querySelector('img');
    img.src = "";
  }
}

// Function that creates a div in the HTML for the researcher to customize, initially with just the name
function addName() {
  // Creates a constant that stores the structure to be added to the HTML
  const nameSectionText = `<div class="nameSection" id="nameSection">
  <button class="deleteButton">-</button>
  <input type="text" placeholder="INSIRA UM TÍTULO" class="inputTittle"> 
  <input class="putName" type="text">
  </div>`
  // Adds the above structure to the "containerStructure" list that will be appended to the HTML
  containerStructure.push(nameSectionText)
  // Defines a constant to store the ID of the structure that will receive the div
  const newParagraph = document.getElementById('myContainer')
  // Appends each value in the "containerStructure" list to the HTML
  newParagraph.innerHTML = containerStructure.join('');

  renderizeMap()
}

// Function that creates a div in the HTML for the researcher to customize, initially with just the date
function addDate() {
  // Creates a constant that stores the structure to be added to the HTML
  const dateSectionText = `<div class="dateSection" id="dateSection">
    <button class="deleteButton">-</button>
    <input type="text" placeholder="INSIRA UM TÍTULO" class="inputTittle"> 
    <input type="date" class="dateInput" name="dateSection" id="dateSection">
    </div>`
  // Adds the above structure to the "containerStructure" list that will be appended to the HTML
  containerStructure.push(dateSectionText)
  // Defines a constant to store the ID of the structure that will receive the div
  const newParagraph = document.getElementById('myContainer')
  // Appends each value in the "containerStructure" list to the HTML
  newParagraph.innerHTML = containerStructure.join('');
  renderizeMap()
}

// Function that creates a div in the HTML for the researcher to customize, initially with just the local
function addLocal() {
  // Creates a constant that stores the structure to be added to the HTML
  const localSectionText = `<div class="localSection" id="localSection">
    <button class="deleteButton">-</button>
    <input type="text" id="address" class="inputTittle" placeholder="Localização">
    <div id="map"></div>
  </div>`
  // Adds the above structure to the "containerStructure" list that will be appended to the HTML
  containerStructure.push(localSectionText)
  // Defines a constant to store the ID of the structure that will receive the div
  const newParagraph = document.getElementById('myContainer')
  // Appends each value in the "containerStructure" list to the HTML
  newParagraph.innerHTML = containerStructure.join('');
  renderizeMap()
}

// Function that creates a div in the HTML for the researcher to customize, initially with just the photo
function addPhoto() {
  // Creates a constant that stores the structure to be added to the HTML
  const photoSectionText = `<div class="photoSection" id="photoSection">
    <button class="deleteButton">-</button>
    <input type="file" class="inputTittle" onchange="showPreview()"><br>
    <img src="" alt="Pré-visualização da Imagem" height="200">
    </div>`
  // Adds the above structure to the "containerStructure" list that will be appended to the HTML
  containerStructure.push(photoSectionText)
  // Defines a constant to store the ID of the structure that will receive the div
  const newParagraph = document.getElementById('myContainer')
  // Appends each value in the "containerStructure" list to the HTML
  newParagraph.innerHTML = containerStructure.join('');
  renderizeMap()
}

//Function that creates a div in the HTML for the researcher to customize how many stages the protocol will be able to
function addStage() {
  // Creates a constant that stores the structure to be added to the HTML
  const stageSectionText = `<button class="myButton"> <input class="inputStageName" type="text" placeholder="nome etapa"> </button>`
  // Adds the above structure to the "stagesList" list that will be appended to the HTML
  stagesList.push(stageSectionText)
  // Defines a constant to store the ID of the structure that will receive the div
  const newParagraph = document.getElementById('stageContainer')
  // Appends each value in the "stagesList" list to the HTML
  newParagraph.innerHTML = stagesList.join('');
}