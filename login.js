var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
  
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "a" && password == "1"){
alert ("Login successfully");
window.location ="http://www.xnxx.com/video-eyoo1e9/peliroja_tiene_sexo_en_el_atico_con_uno_de_sus_companeros_y_ella_bien_perra_toda_posuda_en_el_escrit";//"https://noenadies.github.io/titanic/";// "dos.html"; // Redirecting to other page.
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
