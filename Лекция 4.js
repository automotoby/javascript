'use strict';

class Person { // Базовый класс
  constructor(name) { // Конструктор
    this._name = name; // Создание и инициализация поля
    this._friends = []; // Массив друзей
    this._spouse = null; // Ссылка на объект супруга/и
  }
  sayHello() { // Метод класса
    var s = "hi, my name's " + this._name;
    if (this._friends.length) { // Имена друзей, если есть
      s = s + "\nMy friends:"
      for (var i = 0, n = this._friends.length; i < n; i++) {
        s = s + "\n" + this._friends[i]._name 
      }
    }
    if (this._spouse) { // Имя супруга/и, если есть
      s = s + "\nСупруг(а): " + this._spouse._name;
    }
    console.log(s);
  }
}
class Woman extends Person { // Класс женщины
  constructor(name) {
    super(name);
  }
  setFriend(person) {
    // Женщина дружит только с другими женщинами
    if (person instanceof Woman) {
      this._friends.push(person);
    }
    throw "man can't be a frined to woman";
  }
  getMarry(person) {
    // Женщина может выйти замуж за мужчину и только один раз
    if (!this._spouse && person instanceof Man) {
      this._spouse = person;
    }
  } 
}
class Man extends Person { // Класс мужчины
  constructor(name) {
    super(name); // Вызов базового конструктора
  }
  setFriend(person) {
    // Мужчина дружит только с другими мужчинами
    if (person instanceof Man) {
      this._friends.push(person);
    }
  }
  getMarry(person) {
    // Мужчина может выйти жениться на женщине и только один раз
    if (!this._spouse && person instanceof Woman) {
      this._spouse = person;
    }
  } 
}

var ivan = new Man("Иван"); // Иван - экземпляр мужчины
var peter = new Man("Петр"); // Петр - экземпляр мужчины
var and = new Man("Андрей");  // Андрей - экземпляр мужчины
var ann = new Woman("Анна");  // Анна - экземпляр женщины
var olga = new Woman("Ольга"); // Ольга - экземпляр женщины
ivan.setFriend(peter); // Петр - друг Ивана
ivan.setFriend(and); // Андрей - друг Ивана
ivan.getMarry(and); // Андрей - не может жениться на Иване
ivan.getMarry(ann); // Анна вышла замуж на Ивана
ivan.getMarry(olga); // Жениться можно только один раз
ivan.sayHello();