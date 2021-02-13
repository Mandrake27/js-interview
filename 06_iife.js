// Immediate Invoked Function Expression - функция которая будет вызвана моментально,
// используется в основном для создания скоупа
const result = [];
// for (var i = 0; i < 5; i++) {
//   result.push(function() { console.log(i) })
// }

// result[1](); // 5

// for (var i = 0; i < 5; i++) {
//   (function() {
//     var j = i; // - мы скопировали переменную в свою, в своей области видимости
//     result.push(function() { console.log(j) })
//   })()
// }
//
// result[1](); // 1
