    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyCa-fojSKoZ4Nds82xcYNXWYdpGRBSomgM",
    authDomain: "daring-solstice-315504.firebaseapp.com",
    projectId: "daring-solstice-315504",
    storageBucket: "daring-solstice-315504.appspot.com",
    messagingSenderId: "347063456351",
    appId: "1:347063456351:web:c80844eab3d602e84d41ea"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Reference messages collection
    var messagesRef = firebase.database().ref('messages');

    // Listen for form submit
    document.getElementById('dataForm').addEventListener('submit', submitForm);

    // Submit form
    function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var roll = getInputVal('roll');
    var section = getInputVal('section');
    var dateBrt = getInputVal('dateBrt');
    var mobile = getInputVal('mobile');
    var address = getInputVal('address');
    var city = getInputVal('city');
    var male = getInputVal('male');
    var female = getInputVal('female');
  
    // Save message
    saveMessage(name, email, roll, section, dateBrt, mobile, address, city, male, female);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();

    }
  

  // Function to get get form values
    function getInputVal(id){
    return document.getElementById(id).value;
    }
  
  // Save message to firebase
  function saveMessage(name, email, roll, section, dateBrt, mobile, address, city, male, female){

    var newMessageRef = messagesRef.push();

    newMessageRef.set({
        name: name,
        email: email,
        roll: roll,
        section: section,
        dateBrt: dateBrt,
        mobile: mobile,
        address: address,
        city: city,
        male: male,
        female: female

    });
  }