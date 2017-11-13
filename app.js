'use strict'
// var myFirstPort;
// myFirstPort = 0.1 + 0.2;
// var myFirstPortA;
// myFirstPortA = 'hello';
// console.log(myFirstPort);
// console.log(myFirstPortA);
// console.log(typeof(myFirstPortA));
// console.log(Math.round(myFirstPort * 10) / 10);
// console.log(myFirstPortA + ' ' + typeof(myFirstPortA));
// console.log(`${myFirstPortA} ${typeof(myFirstPortA)}`);


// var a = null; //Null
// var b = void(0); //Undefined
// console.log(typeof(true)); Boolean

// var myObject = {
//     key1: 5,
//     key2: 'wet'
// };

// myObject.key1 = 5;
// myObject.['key2'] = 46;

// console.log(typeof(myObject) + ' ' + JSON.stringify(myObject));
// console.log(Object.keys(myObject));
// console.log(myObject instanceof Array);//false
// console.log('' instanceof Array);//false
// console.log(Array.isArray(myObject));//false

// function f() {

// };
// var f2 = () => {};
// console.log(typeof(f));

// [1,2,3].map( function (x){ return x * 2}); //выводит [2,4,6]
// [1,2,3].map (x => x * 2); //выводит [2,4,6] high order function

// function ff(a,b,c) {
//     return `Результат ${a+b+c} рублей`; // эконом памяти
// }
// console.log(ff(1,2,3));
// var f3 = (a,b,c) => `Результат ${a+b+c} рублей`;

// //IIFI
// var res = (function(a,b) {
//     return `1: ${a == arguments[0]}, 2: ${b == arguments[1]}, 3: ${a == arguments[2]},`;
// })(5,6);
// console.log(res);

// // function f4(...rest) {
// //     return `1: ${a == rest[0]}, 2: ${b == rest[1]}, 3: ${a == rest[2]},`; //rest параметры
// // }
// // console.log(f4(1,2,3));

// // var a1 = [1,2];
// // var a2 = [...a1,2,3,4,5];
// // console.log(a2.toString());

// var a1 = [1,2];
// var a1Copy = a1.slice(0,a1.length); // a1.slice
// a1.splice(0,1);

// var a2 = [...a1,2,3,4,5];
// console.log(a1 == a1Copy);
// console.log(a1Copy.toString());

// a1.unshift(1);
// a1.push(3);
// console.log(a1.toString());
// var x = a1.pop();
// a1.shift();
// console.log(a1.toString());

// console.log(...a1Copy); //Ecma 6


    // function colorCode(colorName) {
    //     var colors={ red:'#FF0000', green:'#00FF00', blue:'#0000FF', black:'#000000', white:'#FFFFFF' };
    //     return colors[colorName];
    // }

    // console.log( colorCode('red') );
    // console.log( colorCode('white') );


// function areArrayEqual(a1, a2) {
//     if (a1.length === a2.length) {
//         for( var i = 0, n = a1.length ; i < n ; i++) {
//             if (a1[i] !== a2[i]) return false;
//         }
//         return true;   
//     }
//     return false; 
// }
// console.log(areArrayEqual([],[]));

'use strict';

const readline = require('readline');

const result = {
    name:'',
    age:0
}

function askName() {
    const rl = prompt();
    rl.question('Какое Ваше имя? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Имя не может быть пустым.');
            askName();
        }
        else {
            result.name = answer;
            askAge();
        }
    });
}

function askAge() {
    const rl = prompt();
    rl.question('Какой Ваш возраст? ', (answer) => {
        rl.close();
        const age = +answer;
        if (isNaN(age)) {
            console.log('Возраст должен быть введен числом.');
            askAge();
        }
        else {
            result.age = age;
            end();
        }
    });
}

function prompt() {
    return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

function end() {
    console.log(`Вы ввели: имя ${result.name}, возраст ${result.age}`);
}

askName();

// 'use strict';
// const readline = require('readline');
// const rl = readline.createInterface({  input: process.stdin,  output: process.stdout});
// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`); 
//   rl.close();
// });