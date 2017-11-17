'use strict';

// параметры функции
// Именованные параметры равны элементам с индексом порядкового номеря параметра из arguments
function f(a,b) {
  return `первый: ${a == arguments[0]}, второй: ${b == arguments[1]}, третий: ${arguments[2]}`;
}
console.log(f(2,5));

// ECMAString 6 rest параметры - аналог arguments
function f2(...rest) {
  return `первый: ${rest[0]}, второй: ${rest[1]}, третий: ${rest[2]}`;
}
console.log(f2(2,5));

// Значения по умолчанию для параметров функции в ECMAString 6
function f3(a = 3,b = 2,c = 1) {
  return `первый: ${a}, второй: ${b}, третий: ${c}`;
}
console.log(f3());

// arguments - это не массив, rest параметры - это массив
function f4(...xyz) {
  console.log(`arguments: ${arguments instanceof Array}, rest par: ${xyz instanceof Array}`);
  console.log(`arguments: ${arguments.push}, rest par: ${xyz.push}`);
}
f4(1,2,3,4,5);

// Пример стрелочной функции с возвратом строки со строковой интерполяцией
var f5 = (a,b,c) => `Результат: ${a+b+c}рублей`;
console.log(f5(1,2,3));

// IIFE - immediately invoked function expression
var res = (function(a,b) {
  return `первый: ${a == arguments[0]}, второй: ${b == arguments[1]}, третий: ${arguments[2]}`;
})(5,6);
console.log(res);

var a1 = [1,2];
// Пример создания копии массива
var a1Copy = a1.slice(0, a1.length); // a1.slice()
console.log(a1 == a1Copy); // ссылки не равны
a1.splice(0,1); // Удалим первый элемент в исходном массиве
console.log(a1Copy.toString()); // копия не пострадала

a1.unshift(1); // добавить 1 в начало массива
a1.push(3); // добавить 3 конец
console.log(a1.toString());
var x = a1.pop(); // удалить элемент с конца
a1.shift(); // удалить элемент с начала
console.log(a1.toString());

// Использование spread оператора для вставки массива в другой массив
var a2 = [...a1,2,3,...a1,4,5];

// Использование spread оператора для создания копии массива (еще один вариант копии)
var a3 = [...a1];
a1Copy.push(3)
// Передача элементов массива в функцию и использованием spread оператора и без
console.log(f5(a1Copy[0], a1Copy[1], a1Copy[2]));
console.log(f5(...a1Copy)); // ECMAString 6

// break не требуется в switch
// без break выполнение продолжится после совпавшего case
// и диалог отобразиться дважды
var x = 'c';
switch (x)
{
    case 'a':
    case 'b':
    case 'c':
        alert('abc');
    default:
        alert('def');
}

(function f() {
    {
        var a = 5;
    }
    // Переменная в областью видимости на
    // уровне функции доступна везде в этой
    // функции
    console.log(a);
})();

(function f() {
    {
        let a = 5;
    }
    // Переменная в областью видимости на
    // уровне блока доступна только в своем
    // блоке
    console.log(a); // ошибка при выполнении ReferenceError: a is not defined
})();