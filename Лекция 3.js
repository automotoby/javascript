'use strict';

// В данной строке правый операнд не будет вычисляться,
// т.к. результат операции от него уже не зависит и будет false
var a = false && !!document.getElementById('my-div');

// В данной строке правый операнд не будет вычисляться,
// т.к. результат операции от него уже не зависит и будет true
var a = true || !!document.getElementById('my-div');

var f = function(x) {
    // Проверка наличия у переменной x нужного метода и вызов этого метода,
    // если он есть
    // переменная b получает ссылку на первый div на странице
    // (т.е. то, что возвращает последний операнд)
    var b = x && x.getElementsByTagName && x.getElementsByTagName('div')[0];

    // Аналогичная проверка только с помощью оператора if
    // вариант с && легче для написания
    if (!!x && !!x.getElementsByTagName) {
        var b = x.getElementsByTagName('div')[0];
    }
    alert(b);
};
f(null); // отработает без ошибки, т.к. есть все проверки
f({}); // отработает без ошибки, т.к. есть все проверки
f(document); // покажет первый div

var f2 = function(params) {
    // Корректрая проверка параметров,
    // передаваемых в функцию в виде словаря
    params = params || {};
    var setting1 = params.setting1 || 0; // Использование значений по умолчанию
    var setting2 = params.setting2 || "empty";
    ...
};

// Функция сравнения содержимого двух массивов
function areArraysEqual(a1, a2) {
    if (!a1 || !(a1 instanceof Array)) throw "Not an array";
    if (!a2 || !(a2 instanceof Array)) throw "Not an array";
    if (a1.length === a2.length) { // если длины равны, то нужно сравнить все элементы
        for (var i = 0, n = a1.length; i < n; i++) {
            // если очередные элементы строго не равны
            // значит и массивы не равны
            if (a1[i] !== a2[i]) return false;
        }
        // если пришли сюда, значит все элементы были строго равны
        // отсюда вывод, что и массивы равны
        return true;
    }
    return false;
}
// тесты для проверки
console.log(areArraysEqual([1,2,3], [1,4,5])); // false
console.log(areArraysEqual([1,2,3], [1,2,"3"])); // false
console.log(areArraysEqual([1,2,3], [1,2,3])); // true
console.log(areArraysEqual([], [])); // true
console.log(areArraysEqual([], null)); // error

// Домашнее задание №6, скелет функции
// Сгенерировать массив из N случайных целых чисел. Поменять местами все элементы относительно середины массива по следующей схеме:
// Было [1,2,3,4,5,6,7,8,9], стало [4,3,2,1,5,9,8,7,6]. Создавать новые массивы нельзя.
// нужно закодировать блок default
// нужно использовать один проход цикла с N/4 итерациями
function arrayPartialReverse(a) {
    if (!a || !(a instanceof Array)) throw "Not an array";
    switch (a.length) {
        case 0:
        case 1:
        case 2:
        case 3:
            // если в массиве до 3 элементов включительно,
            // то ничего делать не нужно
            return a;
        case 4:
        case 5:
            // если 4 или 5 элементов,
            // то достаточно поменять местами
            // первый и второй, последний и предпоследний
            var x = a[1];
            a[1] = a[0];
            a[0] = x;
            x = a[a.length - 1];
            a[a.length - 1] = a[a.length - 2];
            a[a.length - 2] = x;
        default:
            // TODO: полный алгоритм
    }
}