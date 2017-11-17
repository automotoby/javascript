'use strict'; // Строгий режим

// Числовые переменные
var a = 5,
    b = 123e2, // Экспоненциальная форма записи - 12300
    c = 0.1,
    d = 0.2,
    x = c + d;
console.log(x); // Выводит 0.30000000000000004
console.log(Math.round(x * 10) / 10); // Выводит 0.3 - правильное округление дробей

// Лямбда функции и простые функции
function f() {
}
var f2 = () => {};
console.log(typeof(f)); // function
console.log(typeof(f2)); // function
//Пример использования
[1, 2, 3].map(function (x) { return x * 2; }); // Выводит [2, 4, 6]
[1, 2, 3].map(x => x * 2); // Тоже выводит [2, 4, 6]

// Сериализация объекта в json
var o = {
  key1: 5,
  key2: "test"
};
console.log(JSON.stringify(o)); // Выводит {"key1":5,"key2":"test"}
// Получение ключей объекта
console.log(Object.keys(o)); // Выводит [ 'key1', 'key2' ]

// Определение является ли объект массивом
var ar = [];
console.log(ar instanceof Array); // выводит true
console.log(Array.isArray(ar)); // выводит true