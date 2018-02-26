'use strict'
//for
/*
for (var i = 0; i < 10; i++) {
    console.log('Привет');
    console.log('Кеша');
}
*/
//for from 2 to 10
/*
for (var evenNumber = 2; evenNumber < 10; evenNumber++ ) {

    if (evenNumber % 2 == 0) continue;

    alert(evenNumber);
}*/
//task
//prompt num may be > 100
/*
var num;

do {
    num = prompt ('Введите число больше 100', '');
} while (num <= 100 && num != null);*/

//task
//decision
/*
nextPrime:
    for (var i = 2; i <= 10; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert (i);
    }*/

//task switch
/*switch (browser) {
    case 'IE':
        alert( 'О, да у вас IE!' );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Да, и эти браузеры мы поддерживаем' );
        break;

    default:
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}*/
//decision switch - > if
/*
var browser = prompt('Название Вашего браузера?', '');

if (browser == 'IE') {
    alert('Да у Вас IE!');
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert('Да, эти браузеры мы поддерживаем');
} else {
    alert('Мы надеемся, что в  Вашем браузере все ок!');
}
*/

//task
//if -> switch
/*var a = +prompt('a?', '');

if (a == 0) {
    alert( 0 );
}
if (a == 1) {
    alert( 1 );
}

if (a == 2 || a == 3) {
    alert( '2,3' );
}*/

//decision
/*
var a = +prompt('a?', '');

switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
    default:
        alert('Я таких значений не знаю');
        break;
}
*/








