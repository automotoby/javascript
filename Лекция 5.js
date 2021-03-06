class Person { // Базовый класс
    constructor(name) { // Конструктор
        this._name = name; // Создание и инициализация поля

        // Если написать функцию в этом месте,
        // то вызов конструкторной функции будет создавать
        // новый объект этого метода для каждого экземпляра класса,
        // что неэффективно с точки зрения расхода оперативной памяти
        /*this.sayHello = function() { // Метод класса
            console.log("hi, my name's " + this._name);
        }*/
    }
    sayHello() { // Метод класса, лучше объявлять в прототипе
        console.log("hi, my name's " + this._name);
    }
}
class Student extends Person { // Класс наследник
    constructor(name) {
        super(name); // Вызов базового конструктора
    }
}

var p = new Student("Vital"); // Создание экземпляра класса
p.sayHello(); // выводит нужную строку
console.log(p.hasOwnProperty('sayHello')); // выводит false, т.к. метод наследуется по цепочке прототипов

// Но если у объекта перебить метод на новую функцию sayHello
p.sayHello = function() { };
p.sayHello(); // то будет вызываться новая реализация и поиска по цепочке прототипов не будет
console.log(p.hasOwnProperty('sayHello')); // и hasOwnProperty вернет true

// теперь удалим новую реализацию
delete p.sayHello;
p.sayHello(); // и при вызове будет использована реализация из прототипа

// Узнать первый прототип объекта (выводит true)
console.log(p.constructor.prototype === Student.prototype);

// Стачическое свойства можно вызвать через объект конструкторной функции,
// статичество свойство нельзя вызвать через ссылку на объект, оно не участвует
// в поиске по цепочке прототипов
Person.surname = "hacked";
console.log(p.surname); // Ожидаемо undefined

// Установка неявного контекста функции, при вызове через ссылку на объект
p.sayHello(); // Тут this определен и указывает на p
var f = p.sayHello; // Но если присвоить ту же функцию новой переменной
//f(); // и вызвать так, то this не будет установлен неявно и будет undefined
f.apply(p); // в этом случае нужно явно задавать контекст при вызове
f.call(p); // или так
f.bind(p)(); // или так

// В строгом режиме неявный контекст функции undefined
'use strict';
(function(){alert(this);})();
// В обычном режиме в браузере неявный контекст функции - глобальный объект window
(function(){alert(this);})();

// можно удалить и реализацию из прототипа
delete Person.prototype.sayHello;
p.sayHello(); // тогда JavaScript пройдет по всей цепочке прототипов до Object.prototype и не найдет этой функции