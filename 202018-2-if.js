'use strict';
//task
//var >=14 and <=90
/*
var age = prompt('напишите число от 14 до 90 включительно', '');

if (age >= 14 && age <= 90) {
    alert('true');
} else {
    alert('false');
}*/

var age = prompt('Введите число меньше 14 и ли больше 90', '');
//1
/*if (age < 14 || age > 90){
    alert('true');
}else {
    alert('false');
}*/
//2
if (!(age >= 14 && age <= 90)) {
    alert('true');
} else
    alert('false');