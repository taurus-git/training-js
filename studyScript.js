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
//my decision
/*
function sum (firstNum, secondNum) {
    var firstNum = prompt('Введите первое слагаемое', '');
    var secondNum = prompt('Введите второе слагаемое', '');
    var calculateSum = (+firstNum + +secondNum);
    return calculateSum;
}

alert (sum());*/
//decision by js.ru
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
//task
//random num 0 - 10
/*var max = 10;

alert (Math.random() * max);*/

//task
//random min - max
/*var min = 5,
    max = 100;

alert (min + Math.random() * (max - min));*/
/*alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2
*/

//task
//random integer num.
//my decision (Help - https://www.w3schools.com/js/js_random.asp)
/*function randomInteger(min, max) {
    var rand = Math.floor(Math.random() * (max + 1 - min) ) + min;
    return rand;
}

alert( randomInteger(1, 100) );*/
//decisions by js.ru
//1. floor
/*
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand)
    return rand;
}

alert( randomInteger(3, 100));
*/
//2.round
//random num Math.round(random from min-0.5 to max+0.5)
/*function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

alert( randomInteger(3, 100) );*/

//task
//first symbol to upper case
//my decision

/*function ucFirst(str){
    var str = prompt('Type the word to upper case first letter', 'name');
    str = ( str.charAt(0).toUpperCase() + str.slice(1));
    return str;
}

alert (ucFirst());*/
//task
//check spam
/*function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));

}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );*/
//task
//truncate a srting
//my decision
/*
function truncate(str, maxLenght){
  var strLength = str.length;

    if (strLength > 17){
        return (str = (str.slice(0, 17) + ('...')));
    } else {
        return str;
    }
}

alert ( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) );
alert ( truncate('Всем привет!', 20));
*/
//1. decision by js.ru:
/*function truncate(str, maxLength) {
    if(str.length > maxLength){
        return str.slice(0, maxLength - 3) + '...';
    }

    return str;
}
alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert( truncate("Всем привет!", 20) );*/
//2. decision by js.ru
/*function truncate(str, maxLength) {
    return (str.length > maxLength) ? str.slice(0, maxLength - 3) + '...' : str;
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert( truncate("Всем привет!", 20) );*/
//task
//extract num from price
/*function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120') );*/

//task
//getting started with objects
//my decision
/*var user = {
    name: 'Вася',
    surname: 'Петров',
    name: 'Сергей'
};
delete user.name;

alert (user.name + ' ' + user.surname);
//decision by js.ru:
var user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;*/

//task
//my decision
/*var schedule = {};
schedule['8:30'] = 'подъём';

function isEmpty(obj) {

    var counter = 0;
    for (var key in schedule) {
        counter++;
    }

    if (counter > 0){
        return false;
    }
}
alert( isEmpty() );*/
//decision by js.ru + my improvements

/*var schedule = {};

//alert( isEmpty(schedule) ); //true

schedule['8:30'] = 'подъём';

//alert( isEmpty(schedule) ); //false

function isEmpty(obj) {
 for (var key in schedule) {
     return false;
 }
 return true;
}
alert( isEmpty() );*/
//task
/*var salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250
};

var sum = 0;
for (var name in salaries) {
    sum += salaries[name];
}

alert( sum );*/
//task
/*var salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250,
  'Иван': 400

};

var max = 0;
var maxName = '';
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
    }
}

alert( maxName || 'нет сотрудников' );*/
//task
/*var menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])){
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu);

alert( 'menu.width=' + menu.width + ' height=' + menu.height + ' title=' + menu.title);*/
//Arrays
//task
//the last value in the array
/*var goods = [0, 1, 2, 3, 4, "key", "simple text"];
var lastItem = goods[goods.length - 1];

alert (lastItem);*/
//task
//add the last element to the array
/*var goods = [1, 5, "key", true, 'lorem ipsum'];

//goods.push("Компьютер");
goods[goods.length] = "Компьютер";

alert(goods);*/
//task
//New array
/*var styles = [ 'Джаз', 'Блюз' ];

styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert ( styles.shift() );
styles.unshift( 'Рэп', 'Регги' );*/
//task
//random num
//my decision
/*var arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];
var min = 0;
var max = arr.length;
var rand = min + Math.floor(Math.random() * (max + 1 - min));

alert( arr[rand] );*/
//decision by js.ru
/*var arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];

var rand = Math.floor(Math.random() * arr.length);
alert( arr[rand] );*/
//task
//calculator
/*var numbers = [];

while (true) {

    var value = prompt('Введите число', 0);

    if (value === '' || value === null || isNaN(value)) break;

    numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert( sum );*/

//---------------repeat--------------
//task
//1.decision. while
/*
var symb = "#";
var repeat = 0;

while (repeat < 7){
    console.log(symb);
    symb += "#";
    ++repeat;
}
*/
//2.decision. do - while
/*var symb = "#";
var repeat = 0;

do {
    console.log(symb);
    symb += "#";
    repeat++;
} while (repeat < 7);*/
//3.decision. while, repeat--
/*var repeat = 7;
var symb = "#";

while (repeat) { //выполняется, пока repeat true (не "0")
    console.log(symb);
    symb += "#";
    repeat--;
}*/
//4.decision. function
/*var symb = "#";

function symbFigure() {
    for (var i = 0; i <= 7; i++) {
        console.log(symb);
        symb += "#";
    }
}
console.log(symbFigure());*/
//decision by eloquentjavascript.net
/*for (var line = "#"; line.length < 8; line += "#")
    console.log(line);*/

//task
//counter with exceptions
//my decision
/*
var counter;

for (var i = 1; i < 100; i++) {
    if ( (i % 3 == 0) && (i % 5 == 0) )
        console.log(counter = "FizzBuzz");
    else if (i % 3 == 0)
        console.log(counter = "Fizz");
    else if ( (i % 5 == 0) && (i % 3 != 0) )
        console.log(counter = "Buzz");
    else
        console.log(i);
}
*/
//decision by eloquentjavascript.net
/*for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}*/
//task
//chess board
//" " - whitespase

//task
//min num
//1. decision. if - else
/*function min(a, b) {
    if (a > b)
        return b;
    else
        return a;
}

console.log(min(0, 10));
console.log(min(0, -10));*/

//2.decision. ?
/*function min(a, b) {
    return a > b ?  b : a;
}
console.log(min(0, 10));
console.log(min(0, -10));*/

//3.decision with prompt
/*
var a = +prompt("Введите первое число", "");
var b = +prompt("Введите второе число", "");

function min(a, b){
  if (a < b) {
      alert( "Вы сравнивали два числа: " + a + " и " + b + ".\nНаименьшее: " + a);
  } else {
      alert( "Вы сравнивали два числа: " + a + " и " + b + ".\nНаименьшее: " + b);
  }
};

min(a, b);
*/

//task
//recursion
/*
function isEven( n ){
   if ( n == 0){
      return true;
   } else if (n == 1){
       return false;
   } else if (n < 0){
       return isEven( -n );
   } else
       return isEven(n - 2);
};

console.log(isEven(0));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));*/

//task
//find symb
/*function countChar(line, find){
    var count = 0;
    for( var i = 0; i < line.length; i++ ){
        if (line.charAt(i) == find)
        count += 1;}
    return count;
};

function countBs(line) {
    return countChar(line, "В");
}

console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countBs("ВиВальди", "В"));
// → 2*/

//task
//sum(a)(b) = a+b
//my decision
/*function sum(a) {
    var a, b;

    var func = function(b) { alert(a + b); };

    return func;
}*/
//decision by js.ru
/*function sum(a) {

    return function(b) {
        return a + b;
    };
};


alert( sum(1)(2) );
alert( sum(5)(-1) );*/

//task
/*function makeBuffer() {
    var text = '';

    return function (piece) {
        if (arguments.length == 0) {
            return text;
        }
        text +=piece;
    };
};

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

alert( buffer() );

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() );*/

//task
//sorting
/*
var users = [{
    name: 'Вася',
    surname: 'Иванов',
    age: 20
}, {
    name: 'Петя',
    surname: 'Чапаев',
    age: 25
}, {
    name: 'Маша',
    surname: 'Медведева',
    age: 18
}];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byField('name'));
users.forEach(function(user) {
    alert( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
});*/
//task
//filtering through the function
/*
function filter(arr, func) {
   var result = [];

   for (var i = 0; i < arr.length; i++) {
       var val = arr[i];
       if (func(val)) {
           result.push(val);
       }
    }

    return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
    return a % 2 == 0;
}));

alert( filter(arr, inBetween(3, 6)) );
alert( filter(arr, inArray([1, 2, 10])) );
*/
//task
//decision by js.ru
/*function sum(a) {

    var currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1)(2) ); // 6
console.log( sum(6)(-1)(-2)(-3) ); // 0
console.log( sum(0)(1)(2)(3)(4)(5) ); // 15*/

//task
/*
var obj = {}

function A() { return obj; }
function B() { return obj; }

var a = new A;
var b = new B;

alert( a == b );
*/
//task
//calculator
/*function Calculator() {
    this.read = function () {
            this.firstNum = +prompt('1st num?', '-2');
            this.secondNum = +prompt('2nd num?', '5');
    };

    this.sum = function() {
        return this.firstNum + this.secondNum;
    };

    this.mul = function() {
        return this.firstNum * this.secondNum;
    };
}




var calculator = new Calculator();
calculator.read();

alert( "Сумма= " + calculator.sum() );
alert( "Произведение= " + calculator.mul() );*/
//task
//accumulator
/*
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('num?', '0');
    }
}


var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert( accumulator.value );
*/
//task
//calculator
//decision by js.ru
/*function Calculator() {
    var methods = {
        "-": function (a, b) {
            return a - b;
        },
        "+": function (a, b) {
            return a + b;
        }
    };

    this.calculate = function (str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        methods[name] = func;

    };
}

var calc = new Calculator;

calc.addMethod('*', function (a, b) {
    return a * b;
});
calc.addMethod('/', function (a, b) {
    return a / b;
});
calc.addMethod('**', function (a, b) {
    return Math.pow(a, b);
});

var result = calc.calculate('2 ** 3');
alert( result );*/
//task
//get/set
//decision by js.ru
/*function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties( this, {

        firstName: {

            get: function () {
                return this.fullName.split(' ')[0];
            },

            set: function (newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }
        },

        lastName: {

            get: function() {
                return this.fullName.split(' ')[1];
        },

            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }
        }
    });

}
var vasya = new User('Василий Попкин');

//чтение firstName/lastName
alert( vasya.firstName );
alert( vasya.lastName );

// запись в lasrName
vasya.lastName = 'Сидоров';

alert( vasya.fullName );*/
//task
//method reduce to arguments (call, apply)
//1. decision by js.ru
/*function sumArgs() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function(a, b) {
        return a + b;
    });
}

alert( sumArgs(1, 2, 7) );*/
//2. decision by js.ru
/*
function sumArgs() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

alert( sumArgs(4, 5, 6) );
*/
//task
//apply the function to the arguments
//decision by js.ru
/*function sum() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function  mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

alert( applyAll(sum, 1, 2, 3) );
alert( applyAll(mul, 2, 3, 4) );
alert( applyAll(Math.max, 2, -2, 3) );
alert( applyAll(Math.min, 2, -2, 3) );*/
//task
//decorator
//decision by js.ru
/*function work(a) {

}

function makeLogging(f, log) {

    function wrapper(a) {
        log.push(a);
        return f.call(this, a);
    }

    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1);
work(5);

for (var i = 0; i < log.length; i++) {
    alert( 'Лог:' + log[i] );
}*/
//task
//decorator - 2
//decision by js.ru
/*function work(a, b) {
    alert( a + b );
}

function makelogging(f, log) {

    function wrapper() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }

    return wrapper;
}

var log = [];
work = makelogging(work, log);

work(1, 2);
work(4, 5);

for (var i = 0; i < log.length; i++) {
    var args = log[i];
    alert( 'Лог:' + args.join() );
}*/
//task
//decorator - 3
//decision by js.ru

/*
function f(x) {
    return Math.random()*x;
}

function makeCaching(f) {
    var cache = {};

    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };
}

f = makeCaching(f);

var a = f(1);
var b = f(1);
alert( a == b );

b = f(2);
alert( a == b );
*/













