
"use strict";

    function randomDiap(n, m) {
            return Math.floor( Math.random()*(m-n+1) )+n;
    }

    function mood(colorsCount) {
        var colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
        var used = {};

        console.log( 'цветов: ' + colorsCount );
        for (var i = 1; i<=colorsCount; i++) {
            var n = randomDiap(1,7); 
            

            if ( n in used ) // встречалось ли оно?
            continue;
            used[n] = true;

            var colorName = colors[n];

            console.log( colorName )
        }
    }
    mood(7);

    
    // "use strict";
    
    //     var values=[55,77,55,66,77];
    //     var used={}; // ключ хэша - число, которое уже встречалось
    //     for ( var i=0; i<values.length; i++ ) {
    //         var value=values[i]; // очередное значение
    //         if ( value in used ) // встречалось ли оно?
    //             continue; // если да - всё, берём следующее
    //         used[value]=true; // если нет - запоминаем, что это значение уже встречалось
    //         console.log(value); // выводим его в консоль
    //     }