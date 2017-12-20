var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
  
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "a" && password == "1"){
alert ("Login successfully");
window.location ="http://www.xnxx.com/video-c2vnv68/mi_paisita_hermosa_la_de_las_medias_de_abejita_ensenandome_su_sabroso_cuerpo";//"https://noenadies.github.io/titanic/";// "dos.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
