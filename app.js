const config = {
    apiKey: "AIzaSyCEsIqdOo7-BdvufQkb6OZj3XlRW7d6hFk",
    authDomain: "students-data-e7bd0.firebaseapp.com",
    projectId: "students-data-e7bd0",
    storageBucket: "students-data-e7bd0.appspot.com",
    messagingSenderId: "921524719350",
    appId: "1:921524719350:web:dac5e15174976b7fb326d7"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  const messagesRef = firebase.database().ref('messages');


document.querySelector('.dataForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
const name = getInputVal('name');
const email = getInputVal('email');
const roll = getInputVal('roll');
const section = getInputVal('section');
const dateBrt = getInputVal('dateBrt');
const mobile = getInputVal('mobile');
const address = getInputVal('address');
const city = getInputVal('city');
const male = getInputVal('male');
const female = getInputVal('female');


    console.log(name);
}

function getInputVal(id) {
    return document.getElementById(id).value;
}