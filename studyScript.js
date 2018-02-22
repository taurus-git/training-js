'use strict'
//for
/*
for (var i = 0; i < 10; i++) {
    console.log('Привет');
    console.log('Кеша');
}
*/
//for from 2 to 10
for (var evenNumber = 2; evenNumber < 10; evenNumber++ ) {

    if (evenNumber % 2 == 0) continue;

    alert(evenNumber);
}