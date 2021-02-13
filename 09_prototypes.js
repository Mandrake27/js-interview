// __proto__ - ES6 синтаксис прототипов
// Object.getPrototypeOf() - ES5 синтаксис прототипов

// prototype - прототипы функций - используются для передачи свойств объектам,
// которые создаются посредством использования ключевого слова new

// Класс на ES5 синтаксисе
function Cat(name, color) {
  this.name = name;
  this.color = color;
}

// Добавляем в родительский класс метод voice:
Cat.prototype.voice = function() {
  console.log(`Cat with name - ${this.name}, and with color - ${this.color} says meow`);
}

// const cat = new Cat('Holmes', 'grey');
// console.log(cat); // Cat { name: 'Holmes', color: 'grey' }
// console.log(Object.getPrototypeOf(cat)); // Cat { voice: [Function] }
// cat.voice(); // Cat Holmes says meow
// console.log(cat.constructor); // [Function: Cat]

// =========================
function Person() {};
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Miras';
// console.log('skin' in person); // true
// console.log(person.hasOwnProperty('skin')); // false

// ==================
// Object.create:

let proto = { name: 'Miras' };
const myProto = Object.create(proto);

console.log(myProto.name); // Miras
proto.name = 'Angelinka';
console.log(myProto.name); // Angelinka
proto = { name: 'Holmes' };
console.log(myProto.name); // Angelinka

// console.log(myProto.hasOwnProperty('name'));
// console.log(myProto.__proto__ === proto); // true - прототип равен объекту от которого получил инстанс