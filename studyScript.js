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
//task
// if -> to ? or ||
/*function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}*/
//decision
//with ?
/*function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}*/
//with ||
/*
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}
*/

//task
//min number
//1. min(2, 5) == 2
/*//decision 1
function calcMinNumber(a, b) {
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    } else if (a == b) {
        return a;
    }
}
 var checkMinNumber = calcMinNumber(1, 1);
alert(checkMinNumber);
//decision 2{

function calcMinNumber(a, b){
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//decision 3
function calcMinNumber(a, b){
   return a < b ? a : b;
}*/
//task
//degree of
//decision
/*
function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
}

    return result;
}

var x = prompt('x?', '');
var n = prompt('n?', '');

if (n <= 1) {
    alert ('Степень ' + n +  'не поддерживается! Введите число больше 1');
} else
    alert ( pow(x,n) );*/
//task
//recursion
/*function pow(x,n) {
    if (n != 1) {
        return x *= pow(x,n - 1);
    } else {
        return x;
    }
}
alert( pow(2,3));*/
//task
//recursion
//sum to
//1.recursion
//my decision
/*function sumTo (n) {
    if (n > 1) {
        return n + sumTo(n-1);
    } else {
        return n;
    }
}

alert( sumTo(100));*/

//--or--
//js.ru decision
/*function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert (sumTo(100));*/


//2.cycle

/*function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
alert ( sumTo(100) );*/

//3.arithmetic progression
/*function sumTo(n) {
    return n * (n + 1) / 2;
}

alert( sumTo(100) );*/
//task
//factorial
//my decinicion
/*
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

alert( factorial(5) );
*/
//two decinitions from javascript.ru
//first
/*function factorial(n) {
    return (n != 1) ? n * factorial(n -1) : 1;
}

alert( factorial(5) );*/
//second
/*
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) );*/
//task
//Fibonacci number
//1 decition - recursion
/*function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib( n - 2);
}

alert( fib(3) );
alert( fib(7) );
//alert( fib(77) );*/
//2 decision - cycle
/*
function fib(n){
    var a = 1,
        b = 1;
    for (var i =3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}


alert( fib(3) );
alert( fib(7) );
alert( fib(77) );
*/
//task - 1. udemy
/*john and a friend invented a simple game where the player with the highest value of his height plus five times his age wins (what a silly game) 1.Create variables for the heighest and ages of two friends and assign them some values 2. calculate their scores 3. Decide who wins and print the winner to the console. Include the scope in the string that you output to the console. Dont forget that there can be a draw (both players with the same score) 4. Extra: add a third player and now decide who wins. Hint: You will need the && operator to take the decision. If you cant solve this one, just watch the solution, it's no problem*/
//decision
//3 players
/*
var firstHeight = prompt('First player! Your height', '');
var firstAge = prompt('First player! Your age', '');
var firstResult = +firstHeight + +(firstAge * 5);

var secondHeight = prompt('Second player! Your height', '');
var secondAge = prompt('Second player! Your age', '');
var secondResult = +secondHeight + +(secondAge * 5);

var thirdHeight = prompt('Third player! Your height', '');
var thirdAge = prompt('Third player! Your age', '');
var thirdResult = +thirdHeight + +(thirdAge * 5);

if (firstResult > secondResult && firstResult > thirdResult){
    console.log('First result is win! Because ' + firstResult + ' is more then ' + secondResult + ' and ' + thirdResult);
} else if (secondResult > firstResult && secondResult > thirdResult){
    console.log ('Second result is win! Because ' + secondResult + ' is more then ' + firstResult + ' and ' + thirdResult);
} else if (thirdResult > firstResult && thirdResult > secondResult){
    console.log ('Third result is win! Because ' + thirdResult + ' is more then ' + firstResult + ' and ' + secondResult);
} else
    console.log ('No one won because players have same data');*/

//task - 2. udemy
//Years until retirement
/*function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageJohn);
//console.log(ageMike);
//console.log(ageMary);


function yearsUntilretirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }

}
yearsUntilretirement('John', 1990);
yearsUntilretirement('Mike', 1969);
yearsUntilretirement('Mary', 1948);*/
//testing with chai and mocha
/*
describe('любое число кроме нуля в степени 0 равно 1', function(){

    function makeTest(x) {
    it('при возведении ' + x + ' в степень 0 результат: 1' , function() {
     assert.equal(pow(x, 0), 1);
    });
    }

    for (var x = -5; x <= 5; x+= 2) {
        makeTest(x);
    }


    it('ноль в степени 0 равно NaN', function() {
        assert( isNaN(pow(0, 0));
    });

});*/
//task
//numbers
//first task
//my decinition
/*
function sum (firstNum, secondNum) {
    var firstNum = prompt('Введите первое слагаемое', '');
    var secondNum = prompt('Введите второе слагаемое', '');
    var calculateSum = (+firstNum + +secondNum);
    return calculateSum;
}

alert (sum());*/
//decinition by js.ru
/*var a = +prompt('Введите первое число', '');
var b = +prompt('Введите второе число', '');

alert (a + b);*/

//second task
/*var price1 = 0.1;
var price2 = 0.2;
alert( +(price1 + price2).toFixed(2) );*/
//third task
//decision from js.ru
/*
function getDecimal(num) {
    var str = "" + num;
    var zeroPos = str.indexOf(".");
    if (zeroPos == -1) return 0;
    str = str.slice(zeroPos);
    return +str;
}

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2
*/





















