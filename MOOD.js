
"use strict";

    function randomDiap(n,m) {
            return Math.floor(Math.random()*(m-n+1))+n;
    }

    function mood(colorsCount) {
        var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

        console.log( 'цветов: ' + colorsCount );
        for ( var i=1; i<=colorsCount; i++ ) {
            var n=randomDiap(1,colors.length - 1); // выбор случайного индекса цвета который остался в массиве
            var colorName=colors[n];
            colors.splice(n,1); // удаляем цвет из массива который выбрали
            console.log( colorName )
        }
    }
    mood(7);