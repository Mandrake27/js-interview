// Context - определяет то, как функция была вызвана
// const person = {
//   surname: 'Stark',
//   knows: function (what, name) {
//     console.log(`You know ${ what }, ${ name } ${ this.surname }`);
//   }
// }
//
// const john = { surname: 'Snow' };
// // обычный вызов:
// person.knows('everything', 'Bran');
// // вызов методом call, с передачей контекста:
// person.knows.call(john, 'nothing', 'John');
// // вызов методом call, с передачей контекста, но с использованием spread оператора:
// person.knows.call(john, ...['nothing', 'John']);
// // вызов методом apply, с передачей контекста и массивом нужных переменных:
// person.knows.apply(john, ['nothing', 'John']);
// // привязка контекста к функции с последующим вызовом (bind возвращает «привязанный вариант» функции knows,
// фиксируя контекст this и первые аргументы arg1, arg2):
// person.knows.bind(john, 'nothing', 'John')()
// // назначение функции с измененным контекстом в переменную с последующим вызовом:
// const bound = person.knows.bind(john, 'nothing', 'John');
// bound();

// ===================

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
//
// const angelina = new Person('Angelina', '28');

// ===================

// Явный (Explicit)
// function logThis() {
//   console.log(this);
// }
//
// const obj = {
//   age: 27
// };
//
// const bound = logThis.bind(obj);
// bound();

// Неявный (Implicit)
// const animal = {
//   legs: 4,
//   logThis: function() {
//     console.log(this);
//   }
// }
//
// animal.logThis();

// Применение bind:

// const user = {
//   firstName: 'Miras',
//   sayHi() {
//     console.log(`Привет, ${this.firstName}`);
//   }
// }

// setTimeout(user.sayHi, 1000); // Привет, undefined - в setTimeout - теряется контекст

// const sayHi = user.sayHi.bind(user); // Привязали контекст к функции

// setTimeout(sayHi, 1000);// Привет, Miras - передали привязанный контекст в качестве коллбэка

// Если у объекта много методов и мы планируем их активно передавать,
// то можно привязать контекст для них всех в цикле:

// for (let key in user) {
//   if (typeof user[key] === 'function') {
//     user[key] = user[key].bind(user);
//   }
// }

// function mul(a, b) {
//   return a * b;
// }

// const double = mul.bind(null, 2); // Привязали контекст null так как он обязателен и задали первый параметр

// console.log(double(3)); // 6
// console.log(double(5)); // 10

// const triple = mul.bind(null, 3);

// console.log(triple(3)); // 9

// Такое использование удобно в том случае, если нет необходимости каждый раз задавать первый аргумент (аналог примера с замыканием):

// const multiply = (arg1) => {
//   return function(arg2) {
//     return arg1 * arg2;
//   }
// };
//
// const double = multiply(2);
//
// console.log(double(3)); // 6

// ========================================

// function f() {
//   console.log(this.name);
// }
//
// f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
//
// f(); // Вася

// Экзотический объект bound function, возвращаемый при первом вызове f.bind(...),
// запоминает контекст (и аргументы, если они были переданы) только во время создания.
// Следующий вызов bind будет устанавливать контекст уже для этого объекта. Это ни на что не повлияет.
// Можно сделать новую привязку, но нельзя изменить существующую.

// ========================================

// function askPassword(ok, fail) {
//   // ok();
//   fail();
// }
//
// let user = {
//   name: 'John',
//
//   login(result) {
//     console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };
//
// askPassword(user.login.bind(user, true), user.login.bind(user, false));