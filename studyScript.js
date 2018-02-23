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
