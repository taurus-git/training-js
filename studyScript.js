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
//task
//typeof
//decision by js.ru
/*function formatDate(date) {
    if (typeof date == 'number') {
        date = new Date(date * 1000);
    } else if (typeof date == 'string') {
        date = new Date(date);
    } else if (Array.isArray(date)) {
        date = new Date(date[0], date[1], date[2]);
    }

    return date.toLocaleString('ru', {day: '2-digit', month: '2-digit', year: '2-digit'});
}


alert( formatDate('2011-10-02') );
alert( formatDate(1234567890) );
alert( formatDate([2014, 0, 1]) );
alert( formatDate(new Date(2014, 0, 1)) );*/

//task
//object to JSON. JSON to object
/*var leader = {
    name: "Василий Иванович",
    age: 35
};
//object to JSON
var leaderToJson = JSON.stringify(leader);
alert( leaderToJson );
//JSON to object
leader = JSON.parse(leaderToJson);
console.log (leader);*/
//task
//objects with links to JSON
/*var leader = {
    name: "Василий Иванович"
};

var soldier = {
    name: "Петька"
};

leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

alert ( JSON.stringify(team) );*/
//task
//setTimeout-setInterval
//setInterval
/*
function printNumbersInterval(){
    var i = 1;

    var timerId = setInterval(function () {
        console.log(i);
        if (i == 20)clearInterval(timerId);
        i++;
    }, 100);
}

printNumbersInterval();*/
//task
//Recursion setTimeout
/*function printNumbersInterval() {
    var i = 1;

    var timeId = setTimeout(function studyTimer() {
        console.log(i);
        if (i < 20) setTimeout(studyTimer, 100);
        i++;
    }, 100);
};

printNumbersInterval();*/
//task
//try-catch
//eval calculator
//decision by js.ru
/*var expr, res;
//task
//delay function
//decision by js.ru
/*
function delay(f, ms) {

while (true) {
    expr = prompt('Введите выражени?', '2-');
    if (expr == null) break;
    return function() {
        var savedThis = this;
        var savedArgs = arguments;

    try {
        res = eval(expr);
        if (isNaN(res)) {
            throw new Error('Результат неопределён');
        }

        break;
    } catch (e) {
        alert( 'Ошибка: ' + e.message + ', повторите ввод' );
    }
}

alert( res );*//*
        setTimeout(function () {
            f.apply(savedThis, savedArgs);
        }, ms);
    };

}

function f(x) {
    alert( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000('text1');
f1500('text2');
*/
//task
//debounce
//dosen't work decision by js.ru
/*function debounce(f, ms) {

    let timer = null;

    return function (...args) {
        const onCompete = () => {
            f.apply(this, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(onComplete, ms);
    };
}

function f(x) { alert(x) }
let f = debounce(f, 1000);

f(1);
f(2);

setTimeout( function () {
    f(3)
}, 1100 );
setTimeout( function () {
    f(4)
}, 1200 )*/
//task
//throttle
//decision by js.ru
/*function throttle(func, ms) {

    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}*/
//TEST ATOM
/*-----------------------------------------repeat the first part of the tutorial*/
/*var admin, name;
name = 'Василий';
admin = name;
alert( admin );*/

//task
/*var ourPlanetName = 'Земля';
var userName = 'Петя';*/
//task
/*console.log( typeof 0 );
console.log( typeof "0" );
console.log( typeof foo );
console.log( typeof true );
console.log( typeof 'true' );
console.log( typeof {} );*/
//task
// console.log( 'а' > 'я' );//false
// console.log( 'а' > 'Я' );//true
// console.log( 'а' > 'А' );//true
// console.log( 'Я' > 'ААААА' );//true
// console.log( undefined == null );//true
// console.log( undefined === null );//false
//task
/*var askName = prompt('Введите Ваше имя','Иван');
alert('Вас зовут '+ askName);
console.log('Пользователь ввел имя', askName);*/
//task
/*var askQuestion = prompt('Каково «официальное» название JavaScript?', '')
  if( askQuestion == 'ECMAScript' ){
    alert('Верно!');
  } else if ( askQuestion == null ) {
    alert( 'Вы отменили ввод' );
  } else if ( askQuestion == '' ){
    alert('Вы ввели пустую строку!')
  } else {
    alert( 'Не знаете? «ECMAScript»!' );
  }
*/
//task
/*var num = prompt('Введите любое число', '0');
//task
/*var a = 1;
a++;
console.log( a );

var b = 1;
var c = b++;
console.log( c );
if (num > 0){
  alert('Число больше нуля');
} else if (num < 0) {
  alert('Число меньше нуля');
} else if (num == '') {
  alert('Вы ввели пустую строку');
} else if (num == null) {
  alert('Отмена ввода');
} else {
  alert('Вы ввели нуль');
}*/
//task
/*var checkUser = prompt('Кто пришел?', '');

var e = 1;
++e;
console.log( e );
if (checkUser == 'Админ'){

var f = 1;
var g = ++f;
console.log( f );
console.log( g );
  var checkPassword = prompt('Пароль?', '');

var i = 1;
console.log( 2 * i );
i++;
console.log( i );*/
//task
//2 not correct decisions by js.ru
/*function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}*/
/*
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
var age = 25;
console.log( checkAge() );*/
//task
/*
function min(a, b) {
    if (a > b){
        return b;
    } else if (a < b){
        return a;
    } else if (a || b == '')
        return console.log('Одно или оба числа не введены');
    else {
        return console.log('Введенные числа равны');
    }
}
console.log( min(2, 5) );
console.log( min(3, -1) );
console.log( min(1, 1) );
console.log( min(1, ) );
  if (checkPassword == 'Черный Властелин'){
    alert('Добро пожаловать!');
  } else if(checkPassword == null) {
    alert('Вход отменен');
  } else if (checkPassword == '') {
    alert('Вы ввели пустую строку');
  } else {
    alert('Пароль не верен');
  }

} else if(checkUser == null) {
  alert('Вход отменен');
} else if (checkUser == '') {
  alert('Вы ввели пустую строку');
} else {
  alert('Я Вас не знаю');
}*/
//task
//result = (a + b < 4) ? 'Мало' : 'Много';
//task
/*var message = (login == 'Вася') ? 'Привет!' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';*/
/*var result, a, b;
a = 1;
b = 0;

result = a || b;
console.log(result);
console.log(a);
console.log(b);*/
//task
/*var age = prompt('print some number fron 14 to 90', '');

if (age >= 14 && age <= 90){
  console.log('true')
} else {
  console.log('false')
}*/
//task
/*var age;

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);
*/
/*var a = true;

console.log(typeof a);

a = alert( a );

console.log(typeof a);

alert( 123 + 'true');*/
//task
/*"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5
 = "$45"
"4" - 2
 = 2
"4px" - 2
 = NaN
7 / 0
 = Infinity
" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
5 && 2
 = 2
2 && 5
 = 5
5 || 0
 = 5
0 || 5 = 5
null + 1 = 1 // (3)
undefined + 1 = NaN // (4)
null == "\n0\n" = false // (5)
+null == +"\n0\n" = true // (6)


    1.Оператор "+" в данном случае прибавляет 1 как строку, и затем 0.
    2.Оператор "-" работает только с числами, так что он сразу приводит "" к 0.
    3.null при численном преобразовании становится 0
    4.undefined при численном преобразовании становится NaN
    5.При сравнении == с null преобразования не происходит, есть жёсткое правило: null == undefined и только.
    6.И левая и правая часть == преобразуются к числу 0.*/
//task
/*for (var i = 0; i < 10; i++) {

    if (i % 2) {
      alert( i );
      }

  }*/
//task
/*for (var i = 2; i <= 10; i++){
  if (i % 2 == 0) {
    console.log(i);
  }
}*/
//task
//for->while
/*var i = 0;
while (i < 3) {
  console.log( 'номер '+ i + '!' );
  i++;
}*/
//task
//decision by js.ru
/*var num = 0;

do {
  num = prompt('Введите число больше 100', '0');
} while (num <= 100 && num != null && num != '');*/
//task
//switch->if
/*var browser = prompt('Какой у Вас браузер?', '');

if (browser == 'IE'){
  alert( 'О, да у Вас IE!' );
} else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
  alert( 'Да, эти браузеры мы поддерживаем' );
} else{
  alert( 'мы надееемся, что в Вашем браузере всё ок!' );
}*/
//task
//if->switch
/*var a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( '0' );
    break;

  case 1:
    alert( '1' );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
  default:
    break;
}*/
//task
//2 not correct decisions by js.ru
/*function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}*/
/*
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
var age = 25;
console.log( checkAge() );*/
//task min num
//my decision
/*
var a = +prompt('a?', '');
var b = +prompt('b', '');


function min() {
    if (a > b){
        return b;
    } else if (a < b){
        return a;
    } else if (a == '' || b == ''){
       return console.log('Одно или оба числа не введены');
    } else {
        return console.log('Введенные числа равны');
    }
}
console.log( 'Введены цифры '+ a + ' и ' + b + ' минимальное: ' + min() );
*/
//my second decision
/*function min(a, b) {
    if(a > b){
        return console.log(b);
    } else if (b > a){
        return console.log(a);
    } else{
        return console.log('числа равны');
    }
}

min(2, 5);
min(3, -1);
min(1, 1);*/
//my third decision
/*
function min(a, b){
    return a > b ? b : a;
}*/
//task pow
/*function pow(x, n){
    var result = x;

    for (var i = 1; i < n; i++){
        result *= x;
    }
    return console.log(result);
}

var x = +prompt('x', '');
var n = +prompt('n', '');

if (n <= 1) {
    console.log('Степень не поддерживается')
} else{
    pow(x, n);
}*/
//task
//recursion
//cicle
/*function sumTo(n){
    var result = 0;
    for (var i = 1; i <= n; i++){
        result += i;
    }
    return console.log(result);
}
sumTo(1);
sumTo(2);
sumTo(3);
sumTo(4);*/
//recursion
/*function sumTo(n){
    if(n != 1){
        return n + sumTo(n - 1);
    } else {
        return n;
    }
}
console.log( sumTo(100) );*/
//task
//factorial
/*function factorial(n) {
   return (n != 1) ? n * factorial(n-1) : 1;
}

console.log( factorial(5) );*/
//task
/*var a = +prompt('1st num?', '');
var b = +prompt('2nd num?', '');


function sum() {
    alert( a + b );
}

sum();*/
//task
/*var a = +prompt('1st num?', '0.1');
var b = +prompt('2nd num?', '0.2');


function sum() {
    a *= 10;
    b *= 10;
    alert( (a + b) / 10 + ' $');
}

sum();*/
//sum 0.1 + 0.2
//second decision
/*var a = +prompt('1st num?', '0.1');
var b = +prompt('2nd num?', '0.2');


function sum() {
    sum = a + b;
    alert( +sum.toFixed(2) + '$');
}

sum();*/
//task
//two decisions by js.ru
/*var max = 100;

for (var i = 0; i < 100; i++){
    console.log( Math.round(Math.random() *max) );
}*/
//task
//min-max
/*
var min = 5,
    max = 10;

alert( min + Math.random() * (max - min) );*/
//task
//my not-so-right decision.
//error on ''
/*
function ucFirst(){
    return console.log( str[0].toUpperCase() + str.slice(1) );
}

var str = "вася";
ucFirst();*/
/*
function ucFirst(str){
    return console.log( str.charAt(0).toUpperCase() +str.slice(1) );
}

ucFirst("вася");
ucFirst("");*/
//task
//check spam function
/*function checkSpam(str) {
    var spam1 = 'viagra'.toLowerCase();
    var spam2 = 'XXX'.toLowerCase();
    str = str.toLowerCase();

    if (~str.indexOf( spam1)){
        console.log( true );
    } else if (~str.indexOf( spam2)) {
        console.log(true);
    }   else {
        console.log( false );
    }
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");*/
//task
/*function truncate(str, maxlength) {
    if (str.length > maxlength) {
        console.log( str.slice(0, maxlength - 3) + '...' );
    } else {
        console.log(str);
    }
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);*/
//task
//extract value
/*
function extractCurrencyValue(str){
    console.log( +str.slice(1) );
}
extractCurrencyValue('$120');
*/
//task
//simple tasks with objects
/*function isEmpty(obj) {
        for (var key in obj) {
            return false;
        }
        return true;
    }

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false*/
//salary
/*var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
};

var emptyObj = {};

function salariesSum(obj) {
    var sum = 0;

    for (var key in obj) {
        sum += obj[key];
    }

    return console.log( sum ) ;
}

salariesSum(salaries);
salariesSum(emptyObj);*/
//task
/*var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
};

var result = 0;
var resultName = '';

for (var name in salaries) {
    if (result < salaries[name]) {
        result = salaries[name];
        resultName = name;
    }
}
    alert (resultName || 'Нет сотрудников');*/
//task
//Arrays
//last element
/*var goods = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
];

var lastElement = goods[goods.length - 1];
console.log( lastElement );*/
//add new item
/*var goods = [];

goods.push('Компьютер');
goods[goods.length] = 'Laptop';

console.log( goods );*/
//Array creation
/*var styles = [];
styles.push('Джазз', 'Блюз');
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert( styles.shift() );
styles.unshift('Рэп', 'Регги');

console.log( styles );*/
//get random value from array
/*
//my decision
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var min = 0;
var max = arr.length - 1;

var rand = min + Math.floor(Math.random() * (max + 1 - min));

console.log( arr[rand] );
*/
//decision by js.ru
/*
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * arr.length);

alert( arr[rand] );
*/
//calculator, prompt
//my decision
/*var numArray = [];
var sum = 0;

getNumSum();

function getNumSum() {
    var num = prompt('Enter a number', '0');

    if ( (num === '') || (num === null) || isNaN(num)) {
        arraySum();
    } else {
        getNumSum();
        numArray.push(+num);
    }
}

function arraySum() {
    for (var i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }
    return sum;
}

console.log( arraySum() );*/
//decision by js.ru
/*var numbers = [];

while (true) {

    var value = prompt('Enter a number', '0');

    if (value === '' || value === null || isNaN(value)) break;

    numbers.push(+value);
}

var sum = 0;

for (var i = 0; i < numbers.length; i++ ) {
    sum += numbers[i];
}

console.log( sum );*/
//search in array

/*function find(arr, value) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i ;
        }
    }

    return -1 ;
}
var arr = ["test", 2, 1.5, false];

console.log( find(arr, "test") );
console.log( find(arr, 2) );
console.log( find(arr, 1.5) );
console.log( find(arr, 0) );*/
//task with arrays
//add class
//decision by js.ru
/*function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; // класс уже есть
    }

    classes.push(cls); // добавить

    obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log( obj.className );*/
//task
//
//task
/*
function camelize(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );

*/
//task
//removeClass function
//my decision
/*var obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            delete arr[i];
        }
    }

    return arr.join(' ');
}

console.log( removeClass(obj, 'menu') );
console.log( removeClass(obj, 'blabla') );*/
//decision by js.ru
/*
var obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i--; //уменьшает i, чтобы следующая итерация цикла заново проверила элемент с номером i. Без нее функция будет работать с ошибками.
        }


    }

    return obj.className = classes.join(' ');



}

console.log( removeClass(obj, 'menu') );
console.log( removeClass(obj, 'blabla') );
alert( obj.className );
*/
//task
//wrong decision. sorting is unnecessary
/*function filterRangeInPlace(arr, a, b) {

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    console.log( arr.sort(compareNumeric) );

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a) {
            arr.splice(i);
        }
        if (arr[i] > b) {
            arr.splice(i);
        }
    }

}

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log( arr );*/
//task
//filter
//my decision
/*
function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        console.log( arr[i] );
        if (arr[i] < a) {
            arr.splice(i, 1);
            i--;
        }
        if (arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log( arr );
*/
//decision by js.ru
/*function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];

        if (val < a || val > b) {
            arr.splice(i--, 1);
        }
    }
}

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log( arr );*/
//task
//sort in reverse order
//my decision
/*
var arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
    return a - b;
}

arr.sort(compareNumeric).reverse();

console.log( arr );
*/
//decision by js.ru
/*
var arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
    return b - a;
}

arr.sort(compareNumeric);

console.log( arr );
*/
//sorted array
//my decision
/*
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.concat();

arrSorted.sort();

console.log( arrSorted );
console.log( arr );
*/
//decision by js.ru
/*
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();

console.log( arrSorted );
console.log( arr );
*/
//sorting objects
//my wrong decision
/*var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
var sortAge = [];

function sortAgeInObj(arr) {
    console.log( sortAge );

    for (var i = 0; i < people.length; i++){
        sortAge[i] = people[i].age;

    }

    console.log( sortAge );

}

function compareNumeric(a, b) {
    return  a - b;
}
sortAgeInObj(sortAge);
sortAge.sort(compareNumeric);
console.log( sortAge );



// теперь people: [vovochka, masha, vasya]
//console.log(people[0].age) // 6*/
//decision by js.ru
/*function compareAge(personA, personB) {
    return personA.age - personB.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

for (var i = 0; i < people.length; i++ ) {
    console.log( people[i].name );
}*/
//list
//decisions by js.ru
/*var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    var tmp = list;

    while (tmp) {
        console.log( tmp.value );
        tmp = tmp.next;
    }
}

printList(list);*/
//recursion
/*var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    console.log( list.value );

    if (list.next) {
        printList(list.next);
    }
}

printList(list);*/
//reverse output ith recursion
/*var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    if (list.next) {
        printList(list.next);
    }

    console.log( list.value );
}

printList(list);*/
/*
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {
    var arr = [];
    var tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (var i = arr.length - 1; i >=0; i--) {
        console.log( arr[i] );
    }
}

printReverseList(list);
*/
/*function unique(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) );*/
//task
//map
/*var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function (value) {
    return value.length;
});

console.log( arrLength ); // 4,5,2,5*/
//task
//my decision
/*function f(x) {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }

    if (args.length > 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log( f(undefined) );
console.log( f() );*/
//decision by js.ru
/*
function f(x) {
    console.log( arguments.length ? 1 : 0 );
}

f(undefined);
f();
*/
//task
/*
function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    console.log(result);
}

sum();
sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);
*/
//task
//new Date
/*var date = new Date(2012, 1, 20, 3, 12);

alert( date );*/
//task
//my decision
/*
function getWeekDay() {
    var dayOfWeek = date.getDay();
    if (dayOfWeek == 0) {
        return 'вс';
    }
    else if (dayOfWeek == 1) {
        return 'пн';
    }
    else if (dayOfWeek == 2) {
        return 'вт';
    }
    else if (dayOfWeek == 3) {
        return 'ср';
    }
    else if (dayOfWeek == 4) {
        return 'чт';
    }
    else if (dayOfWeek == 5) {
        return 'пт';
    }
    else if(dayOfWeek == 6) {
        return 'сб';
    } else {
        return 'Передана не дата!'
    }

}

var date = new Date(2012, 0, 3);
console.log( date.getDay() );

alert( getWeekDay() );
*/
//decision by js.ru
/*function getWeekDay() {
    var dayOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return dayOfWeek[date.getDay()] ;


}
var date = new Date(2012, 0, 3);
console.log( date.getDay() );

alert( getWeekDay() );
alert( date.toLocaleString('ru', {weekday: 'short'}) );*/
//task
//my decision
/*

function getWeekDay(date) {
    var dayOfWeek = [7, 1, 2, 3, 4, 5, 6];
    return dayOfWeek[date.getDay()] ;

}

var date = new Date(2018,6,8);
alert( getWeekDay(date) );
*/

//decision by js.ru
/*function getWeekDay(date) {
    var dayOfWeek = date.getDay();

    if (dayOfWeek == 0) {
        dayOfWeek = 7;
    }

    return dayOfWeek;

}

var date = new Date(2018,6,8);
alert( getWeekDay(date) );*/
//task
//decision by js.ru
/*function getLastDayOfMonth(year, month) {
    var lastDay = new Date(year, month + 1, 0);
    return lastDay.getDate();
}

console.log( getLastDayOfMonth(2012, 1) );*/
//tasks with closures
/*function sum(a) {

   return function f(b) {
        return a + b;
    };

}

console.log( sum(1)(2) );
console.log( sum(5)(-1) );*/
//task
/*function makeBuffer() {
    var str = '';

    return function (phrase) {
       if (arguments.length == 0){
           return str;
       } else {
           return str += phrase;
       }
    }

}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log( buffer() );

var buffer2 = makeBuffer();

buffer2(0);
buffer2(1);
buffer2(0);

console.log( buffer2() );*/
//task
/*function makeBuffer() {
    var str = '';

    function buffer(phrase) {
        if (arguments.length == 0){
            return str;
        } else {
            return str += phrase;
        }
    };

    buffer.clear = function () {
        str = '';
    }

    return buffer;

}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
console.log( buffer() ); // Тест тебя не съест

buffer.clear();

console.log( buffer() );*/
//task
/*var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {

    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }

}

users.sort(byField('name'));
users.forEach(function (user) {
    console.log( user.name );
});

users.sort(byField( 'age' ));
users.forEach(function (user) {
    console.log( user.name );
});*/
//task
//decision by js.ru
/*function filter(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (func(val)) {
            result.push(val);
        }
    }

    return result;
}

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) != -1;
    };
}


var arr = [1, 2, 3, 4, 6, 7];

alert(filter(arr, function(a) {
    return a % 2 == 0;
})); // 2, 4, 6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2*/
//task
//calculator
/*var calculator = {
    read: function () {
        this.a = +prompt('a?', '0');
        this.b = +prompt('b?', '0');
    },

    sum: function () {
        return this.a + this.b;
    },
//task
//calculator with constructor
/*function Calculator() {

    this.read = function () {
        this.a = +prompt('a?', '0');
        this.b = +prompt('b?', '0');
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };

};

var calculator = new Calculator();
calculator.read();

console.log( 'Сумма = ' + calculator.sum() );
console.log( 'Произведение = ' + calculator.mul() );*/
//task
//accumulator (constructor)
/*function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Что прибавлять будем?', '0');
        };


}

var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log( accumulator.value );*/
//task
//calculator
//decision by js.ru
/*function Calculator() {

    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

var calc = new Calculator;

calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = calc.calculate("2 ** 3");
alert( result ); // 8
var result = powerCalc.calculate('2 ** 3');
console.log( result );*/
//task
//descriptors-getters-setters
//decision by js.ru
/*function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
            firstName: {

                get: function () {
                    return this.fullName.split(' ')[0];
                },

                set: function (newFirstName) {
                    this.fullName = newFirstName + ' ' + this.lastName;
                }
            },

            lastName: {

                get: function () {
                    return this.fullName.split(' ')[1];
                },

                set: function (newLastName) {
                    this.fullName = this.firstName + ' ' + newLastName;
                }

            }
        });
}



var vasya = new User('Высилий Попкин');

console.log( vasya.firstName );
console.log( vasya.lastName );

vasya.lastName = 'Сидоров';

console.log( vasya.fullName );*/
//task
//static properties and methods
//my bad decision
/*
function Article() {
    this.created = new Date();
};

Article.count = 1;


Article.showStats = function () {
    var date = new Date();
    Article.count++;
    alert('Всего ' + this.count + ' ' + date);
};

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();
*/
//decision by js.ru
/*function Article() {
    this.created = new Date();

    Article.count++;
    Article.last = this.created;
}
Article.count = 0;

Article.showStats = function () {
    alert('Всего: ' + this.count + ', ' + 'Последняя ' + this.last );
};

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();*/
//task
/*function sumArgs() {
/!*call*!/
    //my decision
    /!*var num = [].slice.call(arguments); // arguments of this function to array

    return num.reduce(function (a, b) {
        return a + b;
    });*!/
    //decision by js.ru
    /!*return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });*!/

/!*apply*!/
    /!*var num = [].slice.apply(arguments); // arguments of this function to array

    return num.reduce(function (a, b) {
        return a + b;
    }); *!/
/!*method lending*!/
    /!*arguments.reduce = [].reduce;

    return arguments.reduce(function (a, b) {
        return a + b;
    });
*!/

}
console.log( sumArgs(1, 2, 3) );*/
//task
//decision by js.ru
/*function sum() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}


alert( applyAll(sum, 1, 2, 3) ); // 6
alert( applyAll(mul, 2, 3, 4) ); // 24
alert( applyAll(Math.max, 2, -2, 3) ); // 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2*/
//task
//my decision
/*function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function() {
        alert( this.login + ' вошёл в сайт' );
    },

    loginFail: function() {
        alert( this.login + ': ошибка входа' );
    },

    checkPassword: function() {
        ask("Ваш пароль?", this.password, this.loginOk.bind(this) , this.loginFail.bind(this));
    }
};

user.checkPassword();*/
//decision by js.ru
/*
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function() {
        alert( this.login + ' вошёл в сайт' );
    },
//my decision
/*function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function() {
        alert( this.login + ' вошёл в сайт' );
    },

    loginFail: function() {
        alert( this.login + ': ошибка входа' );
    },

    checkPassword: function() {
        ask("Ваш пароль?", this.password, this.loginOk.bind(this) , this.loginFail.bind(this));
    }
};

user.checkPassword();*/
//decision by js.ru
/*
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function() {
        alert( this.login + ' вошёл в сайт' );
    },

    loginFail: function() {
        alert( this.login + ': ошибка входа' );
    },

    checkPassword: function() {
        var self = this;
        ask( "Ваш пароль?", this.password, function () {
            self.loginOk();
        }, function () {
            self.loginFail();
        } ) ;
    }
};

var vasya = user;
user = null;
vasya.checkPassword();
*/
//task
/*
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },

    checkPassword: function() {
        ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
    }
};

var vasya = user;
user = null;
vasya.checkPassword();
*/
//task
/*function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },

    checkPassword: function() {
        var self = this;
        ask("Ваш пароль?", this.password,
            function() {
                self.loginDone(true);
            },
            function() {
                self.loginDone(false);
            }
        );
    }
};

var vasya = user;
user = null;
vasya.checkPassword();*/
//task
//decorator
//decision by js.ru
/*function work(a) {

}

function makelogging(f, log) {

    function wrapper(a) {
        log.push(a);
        return f.call(this, a);
    }

    return wrapper;
}

var log = [];
work = makelogging(work, log);

work(1);
work(5);

for (var i = 0; i < log.length; i++) {
    alert( 'Лог:' +log[i] );
}*/
//task
//decision by js.ru
/*function f(x) {
    return Math.random()*x;
}

function makeCaching(f) {
    var cache = {};

    return function (x) {
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

alert( a == b );*/
/*-----------------------------------------END of the first part of the tutorial*/
/*-----------------------------------------the next is OOP*/
//task
//decision by js.ru
/*
function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    var timerId;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert( 'Кофе готово!' )
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function() {
        clearTimeout(timerId);
    };

}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();
*/
//task
//getters and setters
//my decision
/*
function User() {
    var firstName, surname;

    this.setFirstName = function () {
        firstName = arguments[0];
    };

    this.setSurname = function () {
        surname = arguments[0];
    };

    this.getFullName = function () {
        return firstName + ' ' + surname;
    };

}

var user = new User();
user.setFirstName('Петя');
user.setSurname('Иванов');

console.log( user.getFullName() );
*/
//decision my js.ru
/*function User() {
    var firstName, surname;

    this.setFirstName = function (newFirstName) {
        firstName = newFirstName;
    };

    this.setSurname = function (newSurname) {
        surname = newSurname;
    };

    this.getFullName = function () {
        return firstName + ' ' + surname;
    };

}

var user = new User();
user.setFirstName('Петя');
user.setSurname('Иванов');

console.log( user.getFullName() );*/
//task
//non-working solution from js.ru
/*
function CoffeeMachine(power, capacity) {

    this.getPower = function () {
        return power;
    };

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error('Значение должно быть положительным');
        }
        if (amount > capacity) {
            throw new Error('Нельзя залить воды более, чем ' + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };
}

console.log( CoffeeMachine.getPower() );
*/
//task
//non-working solution from js.ru
/*
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function(amount) {
        this.setWaterAmount(waterAmount + amount);
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше..
coffeeMachine.run();
*/
//add setter
//decision by js.ru
/*function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    this.setOnReady = function (newOnReady) {
        onReady = newOnReady;
    };
    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(function () {
            onReady();
        }, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();*/
//decision by js.ru
/*function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var timerId;

    this.isRunning = function() {
        return !!timerId;
    };

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };

    this.run = function() {
        timerId = setTimeout(function() {
            timerId = null;
            onReady();
        }, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
});*/
//task
//decision by js.ru
/*function Machine(power) {
    this._enabled = false;

    var self = this;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    var parentEnable = this.enable;
    this.enable = function () {
        parentEnable();
        this.run();
    }

    function onReady() {
        alert( 'Кофе готово!' );
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }

        setTimeout(onReady, 1000);
    };
}

//var coffeeMachine = new CoffeeMachine(10000);
//coffeeMachine.run();

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();*/
//task
//decision by js.ru
/*
function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var timerId;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(onReady, 1000);
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет*/
//task
//prototype
/*//decision by js.ru
var head = {
   glasses: 1
};

var table = {
    pen: 3
};
table.__proto__ = head;

var bed = {
    sheet: 1,
    pillow: 2
};
bed.__proto__ = table;

var pockets = {
    money: 2000
};
pockets.__proto__ = bed;

console.log( pockets.pen );
console.log( bed.glasses );
console.log( table.money );*/
//task
//decision by js.ru
/*
function Menu(options) {
    options = Object.create(options);
    options.width = 300;

    alert('width: ' + options.width);
    alert('height: ' + options.height);
}

var options = {
    width: 100,
    height: 200
};

var menu = new Menu(options);

alert('original width: ' + options.width);
alert('original height: ' + options.height);
*/
//task
//decision by js.ru
/*function User(name) {
    this.name = name;
}

var obj = new User('Вася');
var obj2 = new obj.constructor('Петя');

alert( obj2.name );

function User(name) {
    this.name = name;
}
User.prototype = {};

var obj = new User('Вася');
var obj2 = new obj.constructor('Петя');

alert( obj2.name );*/
//task
//native prototypes
/*
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

function f() {
    alert( 'Привет' );
}

f.defer(1000);
*/
//task
//decision by js.ru
/*Function.prototype.defer = function (ms) {
    var f = this;
    return function () {
        var args = arguments,
            context = this;
        setTimeout(function () {
            f.apply(context, args);
        }, ms);
    }
}

function f(a, b) {
    alert( a + b );
}

f.defer(1000) (1, 2);*/
//task
//decision by js.ru
/*
function CoffeeMachine(power) {
    this._power = power;
    this._waterAmount = 0;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype._getTimeToBoil = function () {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
        alert( 'Кофе готов!' );
    }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    this._waterAmount = amount;
};



var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
*/
//task
//decision by js.ru
/*function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function (something) {
    this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found('яблоко');
speedy.found('орех');

console.log( speedy.food.length );
console.log( lazy.food.length );*/
//task
//clock in console
//decision by js.ru
/*function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};*/
//task
//extended clock
//decision by js.ru
/*function ExtendedClock(options) {
    Clock.apply(this, arguments);
    this._precision = +options.precision || 1000;
}

ExtendedClock.prototype = Object.create(Clock.prototype);

ExtendedClock.prototype.start = function () {
  this._render();
  var self = this;
  this._timer = setInterval(function () {
      self._render();
  }, this._precision);
};*/
//task
//menu with animations and timer
//decision by js.ru
/*function AnimatingMenu() {
    Menu.apply(this, arguments);
}

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
    var self = this;

    this._state = this.STATE_ANIMATING;

    this._timer = setTimeout(function() {
        Menu.prototype.open.call(self);
    }, 1000);
};

AnimatingMenu.prototype.close = function() {
    clearTimeout(this._timer);
    Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype._stateAsString = function() {

    switch (this._state) {
        case this.STATE_ANIMATING:
            return 'анимация';

        default:
            return Menu.prototype._stateAsString.call(this);
    }
};

// тест, использование..
var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() { // через 1 секунду
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто
}, 1000);*/
/*------------------DOM------------------*/
//task
/*
//HEAD
document.head;
document.documentElement.children[0];
document.documentElement.firstChild;
//ul
document.body.children[1];
//li
document.body.children[1].children[1];
*/
//task
/*if(!elem.childNodes.length){узел elem пуст};
if(!elem.firstChild);
if(!elem.lastChild);*/
//task
//decision by js.ru
/*var table = document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}*/
//task
/*
//all <lable> in table
document.getElementById('age-table').getElementsByTagName('label');
//first td in table
document.getElementById('age-table').getElementsByTagName('td')[0];
//var result = document.querySelector('#age-table td');
//second form in document
document.getElementsByTagName('form')[1];
//first form in document
document.querySelector('form[name="search"]');
//input in form with name 'search'
document.querySelector('form[name="search"] input');
//view element info[0]
document.getElementsByName('info[0]')[0];
//info[0] in search-person
document.querySelector('form[name="search-person"] [name="info[0]"]');*/
//task
//decision by js.ru
/*var element = document.getElementsByTagName('li');

for (var i = 0; i < element.length; i++) {
    var title = element[i].firstChild.data;
    title = title.trim();

    var childCount = element[i].getElementsByTagName('li').length;

    console.log( title + ': ' + childCount );

}*/
//task
/*var div = document.getElementById('widget');
console.log( div );

var widgetName = div.getAttribute('data-widget-name');
var widgetName = div.dataset.widgetName;

console.log(widgetName);

//task
//decision by js.ru
var links = document.querySelector('a');

for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var href = a.getAttribute('href');
    if (!href) continue;
    if (href.indexOf('://'} == -1) continue;
if (href.indexOf('http://internal.com') === 0) continue;
a.classList.add('extetrnal');
}
//or
var css = 'a[href*="://"]:not([href^="http://internal.com"])';
var links = document.querySelectorAll(css);

for (var i = 0; i < links.length; i++) {
    links[i].classList.add('external');
}*/
//task
//decision by js.ru
/*if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

var elem = document.body.children[0];

elem.remove();
//task
//insertAfter function
<div>Это</div>
<div>Элементы</div>
<script>
var elem = document.createElement('div');
elem.innerHTML = '<b>Новый элемент</b>';

function insertAfter(elem, refElem) {
    /!*var parent = refElem.parentNode;
    var next = refElem.nextSibling;
    if (next) {
        return parent.inssertBefore(elem, next);
    } else {
        return parent.appendChild(elem);
    }
    *!/
    /////or

    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

var body = document.body;

inssertAfter(elem, body.firstChild);

insertAfter(elem, body.lastChild);

</script>

//task
//removeChildren function
//decision by js.ru
<table id="table">
    <tr>
    <td>Это</td>
    <td>Все</td>
    <td>Элементы DOM</td>
</tr>
</table>

<ol id="ol">
    <li>Вася</li>
    <li>Петя</li>
    <li>Маша</li>
    <li>Даша</li>
    </ol>

    <script>
    function removeChildren(elem) {
        while (elem.lastChild) {
            elem.removeChild(elem.lastChild);
        }
    }

removeChildren(table);
removeChildren(ol);
</script>*/
//task
//decision by js.ru
/*var ul = document.createElement('ul');
document.body.appendChild(ul);

while (true) {
    var data = prompt('Введите пункт списка', 'Новый пункт');

    if (!data) {
        break;
    }

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(data));
    ul.appendChild(li);
}*/
//task
//2 decisions from js.ru
//1
/*var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }

    }
};

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
    var li = '';
    for (var key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
        var ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

var container = document.getElementById('container');
createTree(container, data);*/
//2
/*var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }

    }
};

function createTree(container, obj) {
    container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj) {
    // если нет детей, то рекурсивный вызов ничего не возвращает
    // так что вложенный UL не будет создан
    if (isObjectEmpty(obj)) return;

    var ul = document.createElement('ul');

    for (var key in obj) {
        var li = document.createElement('li');
        li.innerHTML = key;

        var childrenUl = createTreeDom(obj[key]);
        if (childrenUl) li.appendChild(childrenUl);

        ul.appendChild(li);
    }

    return ul;
}


function isObjectEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var container = document.getElementById('container');
createTree(container, data);*/
//task
//decision by js.ru
/*function createCalendar(id, year, month) {
    var elem = document.getElementById(id);

    var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);

    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}



createCalendar("calendar", 2012, 9)*/
//task
//decision by js.ru
/*var timerId;
//decision by js.ru
/*var ul = document.createElement('ul');
document.body.appendChild(ul);

while (true) {
    var data = prompt('Введите пункт списка', 'Новый пункт');

    if (!data) {
        break;
    }

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(data));
    ul.appendChild(li);
}*/
//task
//2 decisions from js.ru
//1
/*var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }

    }
};

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
    var li = '';
    for (var key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
        var ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

var container = document.getElementById('container');
createTree(container, data);*/
//2
/*var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }

    }
};

function createTree(container, obj) {
    container.appendChild(createTreeDom(obj));
}

    loginFail: function() {
        alert( this.login + ': ошибка входа' );
    },
function createTreeDom(obj) {
    // если нет детей, то рекурсивный вызов ничего не возвращает
    // так что вложенный UL не будет создан
    if (isObjectEmpty(obj)) return;

    checkPassword: function() {
        var self = this;
        ask( "Ваш пароль?", this.password, function () {
            self.loginOk();
        }, function () {
            self.loginFail();
        } ) ;
    }
};
    var ul = document.createElement('ul');

var vasya = user;
user = null;
vasya.checkPassword();
*/
//task
/*
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}
    for (var key in obj) {
        var li = document.createElement('li');
        li.innerHTML = key;

var user = {
    login: 'Василий',
    password: '12345',
        var childrenUl = createTreeDom(obj[key]);
        if (childrenUl) li.appendChild(childrenUl);

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },
        ul.appendChild(li);
    }

    checkPassword: function() {
        ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
    }
};
    return ul;
}

var vasya = user;
user = null;
vasya.checkPassword();
*/
//task
/*function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',
function isObjectEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },

    checkPassword: function() {
        var self = this;
        ask("Ваш пароль?", this.password,
            function() {
                self.loginDone(true);
            },
            function() {
                self.loginDone(false);
            }
        );
    }
};

var vasya = user;
user = null;
vasya.checkPassword();*/
//task
//decorator
//decision by js.ru
/*function work(a) {

}

function makelogging(f, log) {

    function wrapper(a) {
        log.push(a);
        return f.call(this, a);
    }

    return wrapper;
}

var log = [];
work = makelogging(work, log);

work(1);
work(5);

for (var i = 0; i < log.length; i++) {
    alert( 'Лог:' +log[i] );
}*/
//task
//decision by js.ru
/*function f(x) {
    return Math.random()*x;
}

function makeCaching(f) {
    var cache = {};

    return function (x) {
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

alert( a == b );*/
/*-----------------------------------------END of the first part of the tutorial*/
/*-----------------------------------------the next is OOP*/
//task
//decision by js.ru
/*
function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    var timerId;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert( 'Кофе готово!' )
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function() {
        clearTimeout(timerId);
    };

}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();
*/
//task
//getters and setters
//my decision
/*
function User() {
    var firstName, surname;

    this.setFirstName = function () {
        firstName = arguments[0];
    };

    this.setSurname = function () {
        surname = arguments[0];
    };

    this.getFullName = function () {
        return firstName + ' ' + surname;
    };

}

var user = new User();
user.setFirstName('Петя');
user.setSurname('Иванов');

console.log( user.getFullName() );
*/
//decision my js.ru
/*function User() {
    var firstName, surname;

    this.setFirstName = function (newFirstName) {
        firstName = newFirstName;
    };

    this.setSurname = function (newSurname) {
        surname = newSurname;
    };

    this.getFullName = function () {
        return firstName + ' ' + surname;
    };

}

var user = new User();
user.setFirstName('Петя');
user.setSurname('Иванов');

console.log( user.getFullName() );*/
//task
//non-working solution from js.ru
/*
function CoffeeMachine(power, capacity) {

    this.getPower = function () {
        return power;
    };

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error('Значение должно быть положительным');
        }
        if (amount > capacity) {
            throw new Error('Нельзя залить воды более, чем ' + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };
}

console.log( CoffeeMachine.getPower() );
*/
//task
//non-working solution from js.ru
/*
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function(amount) {
        this.setWaterAmount(waterAmount + amount);
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше..
coffeeMachine.run();
*/
//add setter
//decision by js.ru
/*function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    this.setOnReady = function (newOnReady) {
        onReady = newOnReady;
    };
    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(function () {
            onReady();
        }, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();*/
//decision by js.ru
/*function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var timerId;

    this.isRunning = function() {
        return !!timerId;
    };

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };

    this.run = function() {
        timerId = setTimeout(function() {
            timerId = null;
            onReady();
        }, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
});*/
//task
//decision by js.ru
/*function Machine(power) {
    this._enabled = false;

    var self = this;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    var parentEnable = this.enable;
    this.enable = function () {
        parentEnable();
        this.run();
    }

    function onReady() {
        alert( 'Кофе готово!' );
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }

        setTimeout(onReady, 1000);
    };
}

//var coffeeMachine = new CoffeeMachine(10000);
//coffeeMachine.run();

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();*/
//task
//decision by js.ru
/*
function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var timerId;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(onReady, 1000);
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет*/
//task
//prototype
/*//decision by js.ru
var head = {
   glasses: 1
};

var table = {
    pen: 3
};
table.__proto__ = head;

var bed = {
    sheet: 1,
    pillow: 2
};
bed.__proto__ = table;

var pockets = {
    money: 2000
};
pockets.__proto__ = bed;

console.log( pockets.pen );
console.log( bed.glasses );
console.log( table.money );*/
//task
//decision by js.ru
/*
function Menu(options) {
    options = Object.create(options);
    options.width = 300;

    alert('width: ' + options.width);
    alert('height: ' + options.height);
}

var options = {
    width: 100,
    height: 200
};

var menu = new Menu(options);

alert('original width: ' + options.width);
alert('original height: ' + options.height);
*/
//task
//decision by js.ru
/*function User(name) {
    this.name = name;
}

var obj = new User('Вася');
var obj2 = new obj.constructor('Петя');

alert( obj2.name );

function User(name) {
    this.name = name;
}
User.prototype = {};

var obj = new User('Вася');
var obj2 = new obj.constructor('Петя');

alert( obj2.name );*/
//task
//native prototypes
/*
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

function f() {
    alert( 'Привет' );
}

f.defer(1000);
*/
//task
//decision by js.ru
/*Function.prototype.defer = function (ms) {
    var f = this;
    return function () {
        var args = arguments,
            context = this;
        setTimeout(function () {
            f.apply(context, args);
        }, ms);
    }
}

function f(a, b) {
    alert( a + b );
}

f.defer(1000) (1, 2);*/
//task
//decision by js.ru
/*
function CoffeeMachine(power) {
    this._power = power;
    this._waterAmount = 0;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype._getTimeToBoil = function () {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
        alert( 'Кофе готов!' );
    }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    this._waterAmount = amount;
};



var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
*/
//task
//decision by js.ru
/*function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function (something) {
    this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found('яблоко');
speedy.found('орех');

console.log( speedy.food.length );
console.log( lazy.food.length );*/
//task
//clock in console
//decision by js.ru
/*function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};*/
//task
//extended clock
//decision by js.ru
/*function ExtendedClock(options) {
    Clock.apply(this, arguments);
    this._precision = +options.precision || 1000;
}

ExtendedClock.prototype = Object.create(Clock.prototype);

ExtendedClock.prototype.start = function () {
  this._render();
  var self = this;
  this._timer = setInterval(function () {
      self._render();
  }, this._precision);
};*/
//task
//menu with animations and timer
//decision by js.ru
/*function AnimatingMenu() {
    Menu.apply(this, arguments);
}

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
    var self = this;

    this._state = this.STATE_ANIMATING;

    this._timer = setTimeout(function() {
        Menu.prototype.open.call(self);
    }, 1000);
};

AnimatingMenu.prototype.close = function() {
    clearTimeout(this._timer);
    Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype._stateAsString = function() {

    switch (this._state) {
        case this.STATE_ANIMATING:
            return 'анимация';

        default:
            return Menu.prototype._stateAsString.call(this);
    }
};

// тест, использование..
var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() { // через 1 секунду
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто
}, 1000);*/
/*------------------DOM------------------*/
//task
/*
//HEAD
document.head;
document.documentElement.children[0];
document.documentElement.firstChild;
//ul
document.body.children[1];
//li
document.body.children[1].children[1];
*/
//task
/*if(!elem.childNodes.length){узел elem пуст};
if(!elem.firstChild);
if(!elem.lastChild);*/
//task
//decision by js.ru
/*var table = document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}*/
//task
/*
//all <lable> in table
document.getElementById('age-table').getElementsByTagName('label');
//first td in table
document.getElementById('age-table').getElementsByTagName('td')[0];
//var result = document.querySelector('#age-table td');
//second form in document
document.getElementsByTagName('form')[1];
//first form in document
document.querySelector('form[name="search"]');
//input in form with name 'search'
document.querySelector('form[name="search"] input');
//view element info[0]
document.getElementsByName('info[0]')[0];
//info[0] in search-person
document.querySelector('form[name="search-person"] [name="info[0]"]');*/
//task
//decision by js.ru
/*var element = document.getElementsByTagName('li');

for (var i = 0; i < element.length; i++) {
    var title = element[i].firstChild.data;
    title = title.trim();

    var childCount = element[i].getElementsByTagName('li').length;

    console.log( title + ': ' + childCount );

}*/
//task
/*var div = document.getElementById('widget');
console.log( div );

var widgetName = div.getAttribute('data-widget-name');
var widgetName = div.dataset.widgetName;

console.log(widgetName);

//task
//decision by js.ru
var links = document.querySelector('a');

for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var href = a.getAttribute('href');
    if (!href) continue;
    if (href.indexOf('://'} == -1) continue;
if (href.indexOf('http://internal.com') === 0) continue;
a.classList.add('extetrnal');
}
//or
var css = 'a[href*="://"]:not([href^="http://internal.com"])';
var links = document.querySelectorAll(css);

for (var i = 0; i < links.length; i++) {
    links[i].classList.add('external');
}*/
//task
//decision by js.ru
/*if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

var elem = document.body.children[0];

elem.remove();
//task
//insertAfter function
<div>Это</div>
<div>Элементы</div>
<script>
var elem = document.createElement('div');
elem.innerHTML = '<b>Новый элемент</b>';

function insertAfter(elem, refElem) {
    /!*var parent = refElem.parentNode;
    var next = refElem.nextSibling;
    if (next) {
        return parent.inssertBefore(elem, next);
    } else {
        return parent.appendChild(elem);
    }
    *!/
    /////or

    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

var body = document.body;

inssertAfter(elem, body.firstChild);

insertAfter(elem, body.lastChild);

</script>

//task
//removeChildren function
//decision by js.ru
<table id="table">
    <tr>
    <td>Это</td>
    <td>Все</td>
    <td>Элементы DOM</td>
</tr>
</table>

<ol id="ol">
    <li>Вася</li>
    <li>Петя</li>
    <li>Маша</li>
    <li>Даша</li>
    </ol>

    <script>
    function removeChildren(elem) {
        while (elem.lastChild) {
            elem.removeChild(elem.lastChild);
        }
    }

removeChildren(table);
removeChildren(ol);
</script>*/
//task
//decision by js.ru
/*var ul = document.createElement('ul');
document.body.appendChild(ul);

while (true) {
    var data = prompt('Введите пункт списка', 'Новый пункт');

    if (!data) {
        break;
    }

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(data));
    ul.appendChild(li);
}*/
//task
//2 decisions from js.ru
//1
/*var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }

    }
};

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
    var li = '';
    for (var key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
        var ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

var container = document.getElementById('container');
createTree(container, data);*/
//2
/*var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }

    }
};

function createTree(container, obj) {
    container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj) {
    // если нет детей, то рекурсивный вызов ничего не возвращает
    // так что вложенный UL не будет создан
    if (isObjectEmpty(obj)) return;

    var ul = document.createElement('ul');

    for (var key in obj) {
        var li = document.createElement('li');
        li.innerHTML = key;

        var childrenUl = createTreeDom(obj[key]);
        if (childrenUl) li.appendChild(childrenUl);

        ul.appendChild(li);
    }

    return ul;
}


function isObjectEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var container = document.getElementById('container');
createTree(container, data);*/
//task
//decision by js.ru
/*function createCalendar(id, year, month) {
    var elem = document.getElementById(id);

    var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);

    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}



createCalendar("calendar", 2012, 9)*/
//task
//decision by js.ru
/*var timerId;

function update() {
    var clock = document.getElementById('clock');

    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    var minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    var seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

clockStart();
/!*
function clockStop() {
    clearInterval(timerId);
    timerId = null;
}
*!/*/
//task
/*var ul = document.body.children[0];

ul.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li><li>5</li>");*/
//task
//create button on js
/*var button = document.createElement('a');
button.className = 'button';
button.innerHTML = 'Нажми меня';
button.href = '/';

document.body.appendChild(button);

//create styles for button
button.style.cssText='-moz-border-radius: 8px;\n' +
    '    -webkit-border-radius: 8px;\n' +
    '    border-radius: 8px;\n' +
    '    border: 2px groove green;\n' +
    '    display: block;\n' +
    '    height: 30px;\n' +
    '    line-height: 30px;\n' +
    '    width: 100px;\n' +
    '    text-decoration: none;\n' +
    '    text-align: center;\n' +
    '    color: red;\n' +
    '    font-weight: bold;';
button.style.fontSize = '14px';*/
//task
/*//decision by js.ru
*
 * Показывает уведомление, пропадающее через 1.5 сек
 *
 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
 * @param options.cssText {string} строка стиля
 * @param options.className {string} CSS-класс
 * @param options.html {string} HTML-текст для показа

function showNotification(options) {

    var notification = document.createElement('div');
    notification.className = 'notification';
    if (options.cssText) {
        notification.style.cssText = options.cssText;
    }
    notification.style.top = (options.top || 0) + 'px'; // can use cssText
    notification.style.right = (options.right || 0) + 'px'; //can use cssText
    if (options.className) {
        notification.classList.add(options.className);
    }

    notification.innerHTML = options.html;
    document.body.appendChild(notification);

    setTimeout(function () {
        document.body.removeChild(notification);
    }, 1500);
}

//тест работоспособности
var i = 0;
setInterval(function () {
    showNotification({
        top: 10,
        right: 10,
        html: 'Привет ' + ++i,
        className: 'welcome'
    });
}, 2000);*/
//task
/*
    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}



createCalendar("calendar", 2012, 9)*!/*/
//task
//decision by js.ru
/*var timerId;

function update() {
    var clock = document.getElementById('clock');

    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    var minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    var seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

clockStart();
/!*
function clockStop() {
    clearInterval(timerId);
    timerId = null;
}
*!/*/
//task
/*var ul = document.body.children[0];

ul.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li><li>5</li>");*/
/*
function update() {
    var clock = document.getElementById('clock');

    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    var minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    var seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

clockStart();
/!*
function clockStop() {
    clearInterval(timerId);
    timerId = null;
}
*!/*/
//task
/*var ul = document.body.children[0];

ul.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li><li>5</li>");*/
//task
//create button on js
/*var button = document.createElement('a');
button.className = 'button';
button.innerHTML = 'Нажми меня';
button.href = '/';

document.body.appendChild(button);

//create styles for button
button.style.cssText='-moz-border-radius: 8px;\n' +
    '    -webkit-border-radius: 8px;\n' +
    '    border-radius: 8px;\n' +
    '    border: 2px groove green;\n' +
    '    display: block;\n' +
    '    height: 30px;\n' +
    '    line-height: 30px;\n' +
    '    width: 100px;\n' +
    '    text-decoration: none;\n' +
    '    text-align: center;\n' +
    '    color: red;\n' +
    '    font-weight: bold;';
button.style.fontSize = '14px';*/
//task
/*//decision by js.ru
*
 * Показывает уведомление, пропадающее через 1.5 сек
 *
 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
 * @param options.cssText {string} строка стиля
 * @param options.className {string} CSS-класс
 * @param options.html {string} HTML-текст для показа

function showNotification(options) {

    var notification = document.createElement('div');
    notification.className = 'notification';
    if (options.cssText) {
        notification.style.cssText = options.cssText;
    }
    notification.style.top = (options.top || 0) + 'px'; // can use cssText
    notification.style.right = (options.right || 0) + 'px'; //can use cssText
    if (options.className) {
        notification.classList.add(options.className);
    }

    notification.innerHTML = options.html;
    document.body.appendChild(notification);

    setTimeout(function () {
        document.body.removeChild(notification);
    }, 1500);
}

//тест работоспособности
var i = 0;
setInterval(function () {
    showNotification({
        top: 10,
        right: 10,
        html: 'Привет ' + ++i,
        className: 'welcome'
    });
}, 2000);*/
//task
//decision by js.ru
/*function getDocumentScroll() {
    var box = elem.getBoundingClientRect();

    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    return {
        top: box.top + pageYOffset,
        bottom: pageYOffset + document.documentElement.clientHeight,
        height: scrollHeight
    };
}*/
//task
/*---------------------------Events---------------------------*/
//decision by js.ru
/*document.getElementById('hider').onclick = function () {
    document.getElementById('text').style.visibility = 'hidden';
}*/
//task
/*function handler() {
    var button = document.getElementById('hider');

    button.style.visibility = 'hidden';
}
hider.addEventListener('click', handler);

//or (decision by js.ru)
onclick="this.style.display='none'"*/
//task
//decision
/*var menuElem = document.getElementById('sweeties');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};*/
//task
//decisition by js.ru
/*
var buttons = document.querySelectorAll('#messages-container .remove-button');

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    
    button.onclick = function () {
        var el = this.parentNode;
        el.parentNode.removeChild(el);
    };
}
*/
//task
//decision by js.ru
/*
/!* этот код помечает картинки, для удобства разработки *!/
var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    var span = document.createElement('span');
    // обычно лучше использовать CSS-классы,
    // но этот код - для удобства разработки, так что не будем трогать стили
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);
}

/!* конфигурация *!/
var width = 130; // ширина изображения
var count = 3; // количество изображений

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};*/
//task
//decision by js.ru
/*
var field = document.getElementById('field');
var ball = document.getElementById('ball');


field.onclick = function(event) {

    // координаты поля относительно окна
    var fieldCoords = this.getBoundingClientRect();

    // координаты левого-верхнего внутреннего угла поля
    var fieldInnerCoords = {
        top: fieldCoords.top + field.clientTop,
        left: fieldCoords.left + field.clientLeft
    };

    // разместить по клику,
    // но сдвинув относительно поля (т.к. position:relative)
    // и сдвинув на половину ширины/высоты
    // (!) используются координаты относительно окна clientX/Y, как и в fieldCoords
    var ballCoords = {
        top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
        left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
    };

    // вылезает за верхнюю границу - разместить по ней
    if (ballCoords.top < 0) ballCoords.top = 0;

    // вылезает за левую границу - разместить по ней
    if (ballCoords.left < 0) ballCoords.left = 0;


    // вылезает за правую границу - разместить по ней
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // вылезает за нижнюю границу - разместить по ней
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
};*/
