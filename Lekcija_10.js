/*-------------*/
/* Почему при декларативной подписке на событие в HTML объект события передается */
/* через переменную event? */
/* Когда браузер парсит строку вида <div onclick="handleClick(event);">, он создает анонимную функцию как ниже */
/*-------------*/
var div = document.getElementById(""); // браузер находит элемент div
div.onclick = function (e) {
  var event = e; // просто переменная с именем event, так договорились производители браузеров
  --> копирует значение атрибута onclick
  handleClick(event);
}


/*-------------*/
/* Пример подписки на hashchange */
/* Объект document.location дает всю информацию об адресе страницы: строка поиска, домен, порт, хеш */
/* Когда вы переходите по якорю, секция после # меняется и наступает событие hashchange */
/* hashchange является основным событием для SPA и таких инструментов как Angular, React, Ember и т.д. */
/*-------------*/
<script>
  // Выводит новое значение секции хеша в консоль после ее изменения
  window.onhashchange = () => console.log(document.location.hash);
</script>


/*-------------*/
/* Пример подписки на событие клавиатуры на этапе capture и bubble */
/*-------------*/
<input id="in">
<script>
  var el = document.getElementById('in');
  el.addEventListener('keypress', onPr, true);
  el.addEventListener('keypress', onPr2, false);

  function onPr(e) {
    console.log("capture: " + e.key); // Вывод символа, который был нажат
  };
  function onPr2(e) {
    console.log("bubble: " + e.key);
  };
</script>


/*-------------*/
/* Пример отмены действия по умолчанию - отображения символа в поле ввода после нажатия кнопки */
/*-------------*/
<input id="in">
<script>
  var el = document.getElementById('in');
  el.addEventListener('keypress', onPr, true);
  el.addEventListener('keypress', onPr2, false);

  function onPr(e) {
    e.preventDefault(); // можно на стадии capture
    console.log("capture: " + e.key); // в консоль символ продолжает выводиться
  };
  function onPr2(e) {
    e.preventDefault(); // а можно и на стадии bubble
    console.log("bubble: " + e.key); // в консоль символ продолжает выводиться
  };
</script>


/*-------------*/
/* Пример отмены стадии bubble для того же элемента */
/*-------------*/
<input id="in">
<script>
  var el = document.getElementById('in');
  el.addEventListener('keypress', onPr, true);
  el.addEventListener('keypress', onPr2, false);

  function onPr(e) {
    e.stopImmediatePropagation(); // нужно делать на стадии capture
    console.log("capture: " + e.key); // в консоль символ продолжает выводиться
  };
  function onPr2(e) {
    // Этот обработчик события уже не вызывается
    console.log("bubble: " + e.key);
  };
</script>


/*-------------*/
/* Пример отмены стадии bubble при перехвате события родительским элементом, например body */
/*-------------*/
<input id="in">
<script>
  document.body.addEventListener('keypress', onPr, true);
  document.body.addEventListener('keypress', onPr2, false);

  function onPr(e) {
    e.stopPropagation(); // нужно делать на стадии capture
    console.log("capture: " + e.key); // в консоль символ продолжает выводиться
  };
  function onPr2(e) {
    // Этот обработчик события уже не вызывается
    console.log("bubble: " + e.key);
  };
</script>


/*-------------*/
/* Пример отображения текущих координат мыши с учетом масштаба в браузере */
/*-------------*/
<div
  onmousemove="handleMouseMove(event)"
  onmouseup="handleMouseUp(event)"
  style="width:300px;height:300px;margin:100px auto;background:yellow"></div>

<script>
  function handleMouseMove(e) {
    // Когда мышь двигается в пределах элемента
    e.currentTarget.innerHTML = `(${e.clientX}, ${e.clientY})`;
  }

  function handleMouseOut(e) {
    e.currentTarget.innerHTML = ''; // Очистка, когда мышь ушла с элемента
  }
</script>


/*-------------*/
/* Пример перетягивания блока мышью */
/*-------------*/
<div
  onmousemove="handleMouseMove(event)"
  onmousedown="handleMouseDown(event)"
  onmouseup="handleMouseUp(event)"
  onmouseout="handleMouseUp(event)"
  style="width:300px;height:300px;position:absolute;background:yellow"></div>

<script>

var graggableObject = null; // Перемещаемый элемент
var xy = {}; // Начальные координаты элемента

function handleMouseDown(e) {
  graggableObject = e.target; // Сохранить элемент-источник события
  var s = getComputedStyle(graggableObject);
  xy.top = s.top; // Запомнить его начальную координату Y верхней точки
  xy.left = s.left; // Запомнить его начальную координату X верхней точки
  xy.mtop = e.clientY; // Запомнить позицию курсора по Y в начальной точке
  xy.mleft = e.clientX; // Запомнить позицию курсора по X в начальной точке
}

function handleMouseUp(e) {
  graggableObject = null; // Очистка
  xy = {};
}

function handleMouseMove(e) {
  if (graggableObject) {
    // при перемещении
    // Присвоить Y верхней точки блока начальное значение плюс смещение мыши по Y
    graggableObject.style.top = parseInt(xy.top) + (e.clientY - xy.mtop) + 'px';
    // Присвоить X верхней точки блока начальное значение плюс смещение мыши по X
    graggableObject.style.left = parseInt(xy.left) + (e.clientX - xy.mleft) + 'px';
  }
}

</script>