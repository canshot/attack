// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAfZtnOZXsjrxp-goSNtNghRf2xggjcMnI",
    authDomain: "email-7538d.firebaseapp.com",
    databaseURL: "https://email-7538d.firebaseio.com",
    projectId: "email-7538d",
    storageBucket: "email-7538d.appspot.com",
    messagingSenderId: "30398240890"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var eid = getInputVal('eid');
    var semail = getInputVal('semail');
    var remail = getInputVal('remail');
    var time = getInputVal('time');
    var date = getInputVal('date');
    var title = getInputVal('title');
    var editor = getInputVal('editor');
    var whether = getInputVal('whether'); 
    var critical = getInputVal('critical'); 
    var ts = Math.round(new Date().getTime() / 1000)

    // Save message
    saveMessage(semail, remail, time, date, title, editor, ts, eid, whether, critical);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },30000);
  
    // Clear form
    //document.getElementById('contactForm').reset();
  }
  
  // Function to get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(semail, remail, time, date, title, editor, ts, eid, whether, critical){
    var newMessageRef = messagesRef.push(); 
    newMessageRef.set({
      semail: semail,
      remail: remail,
      time: time,
      date: date,
      title: title,
      editor: editor,
      ts: ts,
      eid: eid,
      whether: whether,
      critical: critical
     }); 
  }
