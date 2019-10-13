function myFunction() {
  var txt;
  if (confirm("Are you ready to submit the email?")) {
    saveMessage, txt = "<font face = 'Georgia' color = red>To ensure the data saving, please click the Send button one more time.<br>Do not refresh the page without researcher's instruction.</font>";
  } else {
    txt = "You email has not been sent.";
  }
  document.getElementById("demo").innerHTML = txt;
}
