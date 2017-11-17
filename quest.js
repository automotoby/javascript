'use strict';
// const readline = require('readline');
// const rl = readline.createInterface({  input: process.stdin,  output: process.stdout});
// rl.question('Введите вашe имя ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
// rl2.question('Введите вашу фамилию ', (answer) => {
// console.log(`Thank you for your valuable feedback: ${answer}`); 
// rl3.question('Введите ваше отчество ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);  
//   rl.close();
// });


// var userName = prompt('Введите вашe имя',''),
// userLast = prompt('Введите вашу фамилию',''),
// userMiddle = prompt('Введите ваше отчество','');

// if (userName && userLast && userMiddle) {

//     var userAge = prompt('Ваш возвраст',''),
//     b = +userAge + 5;
//     c = userAge * 365;

//     if (!isNaN(userAge) && userAge != 0) {
//     var userGender = confirm('Ваш пол - мужской?',''),
//         a = userGender?'Мужской':'Женский';
        

    
//     setResult();
//     }
// }
// else ( alert('Введите корректные данные!'));

//         function setResult() {
//          document.getElementById("result").innerHTML = 'Ваше ФИО: ' + userLast + ' ' + userName + ' ' + userMiddle + '<br>' + 'Ваш возвраст в годах: ' + userAge + '<br>' + 'Ваш возвраст в днях: ' + c + '<br>' + 'Через 5 лет вам будет: '+ b + '<br>' + 'Ваш пол: ' + a;
//         };

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (name, rl) => () => new Promise(resolve => {
  rl.question(`Введите ${name}: `, resolve)
})

const answers = {
  login:    '',
  phone:    '',
  password: ''
}

const setAnswer = name => answer => {
  answers[name] = answer
}

const askLogin    = question('login', rl)
const askPhone    = question('phone', rl)
const askPassword = question('password', rl)

askLogin()
.then(setAnswer('login'))
.then(askPhone)
.then(setAnswer('phone'))
.then(askPassword)
.then(setAnswer('password'))
.then(() => {

  // DO WHAT YOU WANT HERE

  rl.close()
})
