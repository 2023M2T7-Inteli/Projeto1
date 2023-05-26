// Selecting the form element from the DOM
const form = document.querySelector('form');

// Selecting the email and password input elements from the DOM
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// URLs for login, password, and user type endpoints
// URL to fetch login data
const urllogin = '/userLogin'; 
// URL to fetch password data
const urlsenha = '/userPassword';
// URL to fetch user type data 
const urltipo = '/userType'; 

// Variable to track if login is accepted
let loginAccepted = false; 
// Array to store login data retrieved from the server
let dataLogin = []; 
// Array to store password data retrieved from the server
let dataPassword = [];
// Array to store user type data retrieved from the server 
let dataType = []; 

// Fetching login data from the server
fetch(urllogin)
  .then((response) => response.json())
  .then((data) => {
    // Storing login values in the dataLogin array
    for (let i = 0; i < data.length; i++) {
      dataLogin.push(data[i].login);
    }
  })
  .catch((error) => {
    console.error('An error occurred while fetching login data:', error);
  });

// Fetching password data from the server
fetch(urlsenha)
  .then((response) => response.json())
  .then((data) => {
    // Storing password values in the dataPassword array
    for (let i = 0; i < data.length; i++) {
      dataPassword.push(data[i].senha);
    }
  })
  .catch((error) => {
    console.error('An error occurred while fetching password data:', error);
  });

// Fetching user type data from the server
fetch(urltipo)
  .then((response) => response.json())
  .then((data) => {
    // Storing user type values in the dataType array
    for (let i = 0; i < data.length; i++) {
      dataType.push(data[i].tipo);
    }
  })
  .catch((error) => {
    console.error('An error occurred while fetching user type data:', error);
  });

// Adding a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // Checking login credentials against stored data
  for (let i = 0; i < dataLogin.length; i++) {
    if (dataLogin[i] == emailValue) {
      if (dataPassword[i] == passwordValue) {
        // Redirecting based on user type
        if (dataType[i] == "1") {
          // Redirect to the main screen for researchers
          window.location.href = "../html/mainScreenReseacher.html";
        } else if (dataType[i] == "0") {
          // Redirect to the main screen for producers
          window.location.href = "../html/mainScreenProducer.html";
        }
      }
    }
  }
});
