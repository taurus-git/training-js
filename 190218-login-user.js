'use strict';
var userName = prompt('Кто пришел?', '');

if (userName == 'Админ') {
    var userPass = prompt('Пароль?', '');
    if (userPass == 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    }
}
}else if (userName == ''){
    alert('Я вас не знаю');
}else{
    alert('Вход отменен');
}




