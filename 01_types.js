// object - not primitive, primitives: symbol, number, string, null, undefined, boolean
// `` - literals

// console.log(typeof null) // - returns object, but it is not true, it's null
// console.log(typeof function() {}); // - returns function, but again, it's a mistake, function is object, that was designed for easier working process
// console.log(typeof NaN) // - returns a number

// Чем отличается undefined от null: undefined - используется когда переменная не объявлена или объявлена с помощью var и там нет значения - var item;,
// null - переменная объявлена и в ней нет никакого значения let item = null;

// Приведение типов
// '', 0, null, undefined, NaN, false - falsy - return false

// console.log(Boolean(function () {}()));

// Строки и числа
// У строк, как и у чисел есть символ '+' - поэтому JS производит конкатенацию, а не сложение
// console.log(1 + '2'); // 12 - string
// console.log(1 + '' + 0) //10 - string
// console.log('' - 1) // -1 - у строк отсутствует операнд '-' - поэтому он приводит строку к числу и производит вычитание
// console.log('5' * '7') // 35 - подобная история, приводит строки к числу и производит умножение
// console.log('px' + 5 + 10) // px510

// Операторы сравнения
// == - сравнение с привидением типов, по аналогии - === - без
// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log('0' == false); // true
// console.log('0' == 0); // true
// console.log(0 == 0); // true

// console.log(false == '');
// console.log(false == []);
// console.log(false == {});
// console.log('' == 0);
// console.log('' == []);
// console.log('' == {});
// console.log(0 == []);
// console.log(0 == {});
// console.log(0 == null);
// console.log('------------')
//
// console.log(Boolean([]));
