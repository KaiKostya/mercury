let logins = ["alena", "alina", "anna", "ira", "nata", "sneg", "svet", "zoe"];
let passwords = ["enlaea3.4","liaan5l33","naan433km","ari43m,2","atna34kl2","negslk34","vestk3k2","oze532k2l"];
let names = ["Алёна","Алина","Анна","Ира","Наталья","Снег","Светлана","Zoe"];
let images = ["alena.jpg","alina.jpg","anna.jpg","ira.jpg","nata.jpg","sneg.jpg","svet.jpg","zoe.jpg"]

function check_inputs (){
	input_login = document.getElementById("input_field").value,
	input_password = document.getElementById("input_password").value;
	ind = logins.indexOf(input_login);
	if (input_password == passwords[ind])
		{
			loggedin ();
			else {
	
			}
		}

function wrong_log_pas() {
	document.getElementById('wrong').style.display = 'block';
	document.getElementById('input_field').style.color = 'red';
	document.getElementById('input_field').value = input_login;
}

function loggedin() {
	document.getElementById('formlogin').style.display = 'none';
	document.getElementById('loggedin').style.display = 'block';
	document.getElementById('ava').img.src = 'images'+images[ind];
	var Username = document.getElementById('user_name'),
	name = names[ind];
	Username.innerHTML = name;
}

function logout () {
	document.getElementById('loggedin').style.display = 'none';
	document.getElementById('formlogin').style.display = 'block';
	//document.getElementById("input_field").value="";
	//document.getElementById("input_password").value="";
	document.getElementById('ava').img.src = "";
	document.getElementById('user_name').innerHTML = "";
}