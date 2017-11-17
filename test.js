// var nameAdmin = prompt('Кто пришел?', '');
// if(nameAdmin === 'admin') {
//         var adminPass = prompt('Введите пароль','');
//         if (adminPass === '239wer') {
//             alert('Добро пожаловать');
//         }
//         else if (adminPass === null) {
//             alert('Вход отменен');
//         }   
//         else {
//             alert('Пароль неверный!');
//         }
//     }
// else if (nameAdmin === null) {
//         alert('Вход отменен');
// }
// else {
//         alert('Я вас не знаю')
// }  

// if (a + b < 4) {
//     result = 'Мало';
//   } else {
//     result = 'Много';
//   }

  
//  var a = prompt('',''), b = prompt('','');
//  asses = (+a + +b < 4)?'Мало' : 'Много';
//  alert(asses);

//  var message;
 
//  if (login == 'Вася') {
//    message = 'Привет';
//  } else if (login == 'Директор') {
//    message = 'Здравствуйте';
//  } else if (login == '') {
//    message = 'Нет логина';
//  } else {
//    message = '';
//  }

//  var message = (login == 'Вася') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';


// if (age >= 14 && age <= 90); //проверка диапазона от 14 до 90

// if (!(age >= 14 && age <= 90)); // проверка вне диапазона
// if (age < 14 || age > 90);

// "" + 1 + 0 // '10'
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" //6
// 4 + 5 + "px" // '9px'
// "$" + 4 + 5 // '$45'

// "4" - 2 // 2

// "4px" - 2 // NaN

// 7 / 0 // Infinity 

// "  -9\n" + 5 // " -9\n5"
// "  -9\n" - 5 //-14
// 5 && 2 //2

// 2 && 5 //5

// 5 || 0 //5

// 0 || 5 //5
// null + 1 // 1
// undefined + 1 // NaN
// null == "\n0\n" // false
// +null == +"\n0\n" // true

// while

// var i = 3;
// while (i) {
//     alert( i );
//     i--;
// }

// // do While

// var i = 0;
// do{
//     alert( i );
//     i++;
// } while ( i < 3 );

// // for

// for ( var i = 0 ; i <= 5 ; i++ ) {
//     alert ( i );
// }

// // break

// var sum = 0;
// while (true) {
//     var value = +prompt('Введите число','');
//     if (!value) break;
//     sum += valie;  
// }
// alert( 'Сумма: ' + sum);

// // continue

// for ( var i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue; // пропускает alert для четных
//     alert(i);
// }

// for (var i = 0; i < 10; i++) {
    
//       if (i % 2) {
//         alert( i );
//       }
    
//     }

// var userName = prompt('Введите вашe имя',''),
//     userLast = prompt('Введите вашу фамилию',''),
//     userMiddle = prompt('Введите ваше отчество','');
    

//     if (userName && userLast && userMiddle) {

//         var userAge = prompt('Ваш возвраст',''),
//         b = +userAge + 5;
//         c = userAge * 365;

//         if (!isNaN(userAge)) {
//         var userGender = confirm('Ваш пол - мужской?',''),
//             a = userGender?'Мужской':'Женский';
            

        
//         alert('Ваше ФИО: ' + userLast + ' ' + userName + ' ' + userMiddle + '\n' + 'Ваш возвраст в годах: ' + userAge + '\n' + 'Ваш возвраст в днях: ' + c + '\n' + 'Через 5 лет вам будет: '+ b + '\n' + 'Ваш пол: ' + a)
//         }

//     }
//          function setResult(res) {
//       document.getElementById("result").innerHTML = "<b>Result is</b>: " + res;
//     }

// var arr = [];

//     for(var i = 0; arr.length < 9 ; i++) {
//     arr[i] = Math.floor(Math.random()*10)+1;
//     };
//     console.log('['+ arr.toString()+']');
//     (function swapArray (arr) {
//         if(arr.length < 3) return arr;
//         var center = Math.floor(arr.length / 2);
//         var odd = (arr.length % 2);
//         for(var i = 0; i < center; i++) {
//             var nextIndex = center + i + odd;
//             var x = arr[i];
//             arr[i] = arr[nextIndex];
//             arr[nextIndex] = x;
//         }
//         console.log('['+ arr.toString()+']'); 
// })(arr);  

// class Person { // Базовый класс
//     constructor(name) { // Конструктор
//         this._name = name;
//         this._friend = []; // Создание и инициализация поля
//         this._spouse = null;
//     }
//     sayHello() { // Метод класса
//         var s = "hi, my name's " + this._name;
//         if (this._friends.length) {
//             s = s + '\n'
//         }
//     }
//  }
//  class Man extends Person { // Класс наследник
//     constructor(name) {
//         super(name); // Вызов базового конструктора
//     }
//     setFriend(person) {
//         if(person instanceof Men) {
//             this._friends.push(person);
//         }
//     }
//     sayHello() { // Переопределение метода sayHello
//         super.sayHello(); // Вызов базовой реализации
//         console.log("Please, hire me");
//     }
//  }
//  var p = new Man("Vital"); // Создание экземпляра класса
//  p.sayHello();

//  var ivan = 
'use strict';
const readline = require('readline');
const rl = readline.createInterface({  input: process.stdin,  output: process.stdout});
rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`); 
  rl.close();
});