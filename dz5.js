    for(var i = 0; arr.length < 10 ; i++) {
    arr[i] = Math.floor(Math.random()*10)+1; //заполнение массива случайными числами
    };
    console.log('['+ arr.toString()+']'); // вывод масива
    (function swapArray (arr) {
        if(arr.length < 3) return arr;
        var center = Math.floor(arr.length / 2);
        var odd = (arr.length % 2);
        for(var i = 0; i < center; i++) {
            var nextIndex = center + i + odd;
            var x = arr[i];
            arr[i] = arr[nextIndex];
            arr[nextIndex] = x;
        }
        console.log('['+ arr.toString()+']'); // результат перестроения
    })(arr);