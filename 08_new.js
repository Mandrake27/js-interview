function Cat(name, color) {
  this.name = name;
  this.color = color;
}

const cat = new Cat('Holmes', 'Grey');

console.log(cat); // Cat { name: 'Holmes', color: 'Gray' }

// Кастомный конструктор:

const myNew = (constructor, ...args) => {
 const obj = {};
 Object.setPrototypeOf(obj, constructor.prototype);
 return constructor.apply(obj, args) || obj;
}

const customCat = myNew(Cat, 'Ozzik', 'Grey');

console.log(customCat); // Cat { name: 'Ozzik', color: 'Gray' }

const incorrectCat = Cat();
console.log(incorrectCat); // undefined - функция ничего не возвращает