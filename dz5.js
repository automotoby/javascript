var arr = [1,2,3,4,5,6,7,8,9];

    // for(var i = 0; arr.length < 10 ; i++) {
    // arr[i] = Math.floor(Math.random()*10)+1;
    // };
    console.log('['+ arr.toString()+']');
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
        console.log('['+ arr.toString()+']');
    })(arr);