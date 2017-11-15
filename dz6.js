var a = [1,2,3,4,5,6,7,8,9,10,11,12,13];

console.log('['+ a.toString()+']'); // вывод начального массива

    if (!a || !(a instanceof Array)) throw "Not an array";
    switch (a.length) {
        case 0:
        case 1:
        case 2:
        case 3:
            alert('массив не преобразован');
        case 4:
        case 5:
            {
                var x = a[1];
                a[1] = a[0];
                a[0] = x;
                x = a[a.length - 1];
                a[a.length - 1] = a[a.length - 2];
                a[a.length - 2] = x;
                console.log(a);
            };
            break;
        default:
        
        (function swapArray (a) {
            if(a.length < 3) return a;
            var center = Math.floor(a.length / 2);
            var quarter = Math.floor(center / 2);
            var odd = (a.length % 2);
            for (var i = 0; i < quarter; i++) {
                // сортировка от 1 до центра
                var n = center - a[i];
                var x = a[i];
                a[i] = a[n];
                a[n] = x;
                // сортировка от центра до последнего числа
                var x = a[(a.length - 1) - i];
                a[(a.length - 1) - i] = a[center + i + odd];
                a[center + i + odd] = x;


            }
            console.log('['+ a.toString()+']'); // вывод что получилось
        })(a);
        }; 
