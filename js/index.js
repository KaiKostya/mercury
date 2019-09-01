		    let logins = ["alena", "alina", "anna", "ira", "nata", "sneg", "svet", "zoe"];                            // здесь я создавал свою базу с пользователями, паролями и аватарами
			let passwords = ["123","liaan5133","naan433km","ari43m,2","atna34kl2","negslk34","vestk3k2","oze532k2l"]; // если в кнопке Login формы авторизации на событие onclick назначить функцию check_inputs (event); вместо auth(event);
			let names = ["Алёна","Алина","Анна","Ира","Наталья","Снег","Светлана","Zoe"];                             // то будет работать авторизация с местной базой пользователей и паролей. Имена и пароли можно смотреть в массивах logins и passwords
			let images = ["alena.jpg","alina.jpg","anna.jpg","ira.jpg","nata.jpg","sneg.jpg","svet.jpg","zoe.jpg"];
			function auth (event) {
				event.preventDefault();                                     // отменяем событие по умолчанию, чтобы форма не перезагружалась
				input_login = document.getElementById("input_field").value; // получаем логин с формы
				input_password = document.getElementById("input_password").value; // получаем пароль
				var request = new XMLHttpRequest();
				request.open('POST', 'https://us-central1-mercdev-academy.cloudfunctions.net/login', true);  // настройки запроса
				request.setRequestHeader('accept', 'application/json');                  // заголовок
				request.send({"email": input_login, "password": input_password});        // данные в json
				request.onreadystatechange = function () {
					if (request.readyState === 4 && request.status === 200) { // сервер ответил успешно, предположим, что в json ответе сервера есть имя, пароль и путь к аватару пользователя
						var json = JSON.parse(request.responseText);
						user_name = json.name;                            //имя пользователя
						user_image = json.image_url       						// url аватара
						login(user_name, user_image);
					}
					else {
						wrong_log_pas(); // сервер ответил ошибкой, вызываем функцию для вывода блока с ошибкой
					}
				}
			}
			function login(name, image) {
				document.getElementById('formlogin').style.display = "none";  // скрываем форму авторизации
				document.getElementById('loggedin').style.display = "block";   // отображаем страницу пользователя
				document.getElementById('user_image').src = image; // вставляем путь к картинке в виде url
				var Username = document.getElementById('user_name'), // находим блок для отображения имени пользователя под картинкой
				name_on_page = name; // присваиваем локальной переменной параметр, пришедший извне с именем пользователя
				Username.innerHTML = name_on_page;  // отображаем имя на странице
			}
		    function clear_input() {                               // очищаем поля при клике на поле ввода логина и убираем красный текст
				document.getElementById("input_field").value = "";
				document.getElementById("input_field").style.color = "black";
				document.getElementById("input_password").value = "";
				document.getElementById('wrong').style.display = "none";
				
			}
			function check_inputs(event) {
				event.preventDefault();
				input_login = document.getElementById("input_field").value; // получаем логин с формы
				input_password = document.getElementById("input_password").value; // получаем пароль
				ind = logins.indexOf(input_login);  // индекс в массиве паролей
			if (ind == -1) {                        // если индекс -1, то элемента в массиве не существует
				wrong_log_pas();                    // вызываем блок с неверным именем/паролем
			}
			else if (input_password == passwords[ind]) {  // если логин есть в массиве и он совпадает с паролем, находящемся в массиве паролей под тем же индексом
				loggedin();                               // то вызываем функцию по отображению страницы пользователя
			} else {
				wrong_log_pas();                          // если нет, то отображаем неверный логин/пароль
			}
			}
			
			function wrong_log_pas() {
				document.getElementById('wrong').style.display = "block";   // отображаем блок неверное имя/пароль
				document.getElementById('input_field').style.color = "red";  // красный текст
				document.getElementById('input_field').value = input_login;  // оставляем введенный e-mail
			}
			
			function loggedin() {
				document.getElementById('formlogin').style.display = "none";  // скрываем форму авторизации
				document.getElementById('loggedin').style.display = "block";   // отображаем страницу пользователя
				document.getElementById('user_image').src = "images/"+images[ind]; // с аватаром
				var Username = document.getElementById('user_name'),
				name = names[ind];
				Username.innerHTML = name;                                         // и именем
			}
			
			function logout (event) {
				event.preventDefault();
				document.getElementById('loggedin').style.display = 'none';     // разлогиниваемся, скрываем текущую форму, очищая все блоки и показываем страницу авторизации
				document.getElementById('formlogin').style.display = 'block';
				document.getElementById("input_field").value="";
				document.getElementById("input_password").value="";
				document.getElementById('user_image').src = "";
				document.getElementById('user_name').innerHTML = "";
			}