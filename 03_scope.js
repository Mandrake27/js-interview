// Область видимости - зона доступности переменных
// const a = 10; // - переменная в глобальной области видимости

// console.log(a); // 10 - свободно покажет значение;

// if (true) {
//   const b = 20;
// }

// console.log(b) // ReferenceError: message is not defined - блок if создал свою область (блочную) видимости для b

// блочная область создается в if, for, while

// for (const color of ['green', 'red', 'blue']) {
  // область видимости блока for
  // const message = 'Hi'
  // console.log(color) // 'green', 'red', 'blue'
  // console.log(message) // 'Hi', 'Hi', 'Hi'
// }
// console.log(color) // ReferenceError
// console.log(message) // ReferenceError

// while (true) {
  // область видимости блока while
  // const message = 'Hi'
  // console.log(message) // 'Hi'
// }
// console.log(message) // ReferenceError

// Функции в JavaScript создают область видимости для всех переменных,
// независимо от того, с помощью какого ключевого слова они объявлены (var, const или let).

// function run() {
  // область видимости функции run()
  // var message = 'Беги, Форрест, беги!'
  // console.log(message)
// }
// run() // 'Беги, Форрест, беги!'
// console.log(message) // ReferenceError

// Аналогичным образом функция создает область видимости для переменных,
// объявленных с помощью const и let, и даже для других функций и функциональных выражений:

// Модульная область видимости инкапсулирует модули. Это означает, что частные переменные
// (которые не экспортируются) используются для собственных нужд модуля и защищены от доступа извне.

// Таким образом, можно сказать,
// что область видимости — это механизм инкапсуляции переменных для блоков кода, функций и модулей.

// В браузере глобальной является область видимости,
// создаваемая при загрузке JavaScript-файла, указанного в атрибуте src тега script

// script.js
// глобальная область видимости
let counter = 1

// Переменные, объявленные в глобальной области видимости являются глобальными переменными.
// Они доступны в любой другой области.

// Глобальная область видимости — это механизм,
// который позволяет среде выполнения JavaScript-кода (браузеру, Node.js)
// предоставлять приложениям хостовые (т.е. принадлежащие среде) объекты как глобальные переменные.
// Например, window и document являются глобальными переменными (объектами),
// предоставляемыми браузером. В Node.js такой переменной является, например, объект process.

function outer() {
  // область видимости функции outer()
  let v = 'Я из области видимости функции outer()!'

  function inner() {
    // область видимости функции inner()
    console.log(v) // 'Я из области видимости функции outer()!'
  }

  return inner
}

const f = outer()
f()

// JavaScript реализует механизм под названием лексическая или статическая область видимости.
// Лексическая область видимости означает, что доступность переменных определяется статически
// положением данных переменных внутри области видимости вложенной функции: переменные из области
// видимости внешней функции доступны в области видимости вложенной функции

// Лексическая область видимости состоит из внешних областей, определенных статически.
// Любая функция, независимо от места выполнения, имеет доступ к переменным из ее лексической области видимости (в этом заключается суть замыканий).