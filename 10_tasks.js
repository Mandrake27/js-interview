// const getPrimes = (num) => {
//   const result = [];
//   for (let i = 2; i < num; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(getPrimes(100))

// №2 - Написать функцию, проверяющую правильно расставленные скобки;

// const check = (str) => {
//   const bracketPairObj = {
//     '}': '{',
//     ']': '[',
//     ')': '(',
//   };
//   const pairArr = [];
//   let result = true;
//
//   for (let i = 0; i < str.length; i++) {
//     const isItOpen = Object.values(bracketPairObj).includes(str[i]);
//     if (isItOpen) {
//       pairArr.push(str[i]);
//       continue;
//     }
//     const isItCorrectCloser = bracketPairObj[str[i]] === pairArr[pairArr.length - 1];
//     if (isItCorrectCloser) {
//       pairArr.pop();
//     } else {
//       return false;
//     }
//   }
//   return result;
// }
//
// console.log(check("{()}[]")); // true
// console.log(check("{[}]")); // false

// №3 - Написать функцию sum чтобы выражение sum(1)(2)(5)(10) возвращало 18.

// const sum = num1 => num2 => num3 => num4 => num1 + num2 + num3 + num4;
//
// console.log(sum(1)(2)(5)(10));

// №4 - Написать функцию getAnagrams:

// call getAnagrams(“нос”, “сон”, “снедь”, “днесь”)

// result: [
//   ["нос", "сон"],
//   ["днесь", "снедь"]
// ]

// function getAnagrams(...args) {
//   const result = [];
//   const compareWords = (str1, str2) => {
//     const sortStr = str =>
//       str.toLowerCase()
//         .split('')
//         .sort()
//         .join('')
//     return sortStr(str1) === sortStr(str2);
//   };
//   while(args.length) {
//     const word = args.pop();
//     const anagrams = args.filter(item => compareWords(item, word));
//     if (anagrams.length) {
//       args = args.filter(item => !anagrams.includes(item));
//     }
//     result.push([word, ...anagrams]);
//   }
//   return result;
// }
// getAnagrams('нос', 'сон', 'Мирас', 'Сарим', 'сарим', 'снедь', 'днесь')
// console.log(getAnagrams('нос', 'сон', 'Мирас', 'Сарим', 'сарим', 'снедь', 'днесь'));

// №5 - Реализовать функцию - банкомат
/*
const LIMITS = {
  5000: 4,
  1000: 5,
  500: 2,
  100: 5,
  50: 100,
  30: 24
}
function get30Diff(amount, limit) {
  const dividesEntirely = amount % 30 === 0;
  let result = dividesEntirely ? {30: amount / 30} : false;
  let diffAmount = amount;
  let times30 = 1;
  while(diffAmount > 0) {
    diffAmount = amount - 30 * times30;
    const hasDiff = diffAmount % 50 === 0;
    console.log(hasDiff, diffAmount, 30 * times30)
    if (hasDiff) {
      result = {30: times30}
      break;
    }
    times30++;
  }
  if (result && result[30] > limit) {
    result = false;
  }
  return result;
}
function getMoney(amount) {
  const isItPosible50 = amount % 50 === 0;
  const result = {};
  let diffAmount = amount;

  if (!isItPosible50) {
    const diff30 = get30Diff(amount, LIMITS[30]);
    if (!diff30) {
      throw new Error('Невозможно выдать такую сумму');
    }
    result[30] = diff30[30];
    diffAmount = amount - diff30[30] * 30;
  }


  Object.keys(LIMITS)
    .sort((i, j) => j - i)
    .reduce((acc, nomenal) => {
      const count = LIMITS[nomenal];
      let banknotes = parseInt(acc / nomenal);

      if (banknotes) {
        if (banknotes > count) banknotes = count;
        result[nomenal] = banknotes;
      }
      return acc - banknotes * nomenal;
    }, diffAmount)

  return result;
}
console.log(getMoney(4860));
*/


// №6 - Реализовать функции five, add, one, seven, subtract, two:
/*
const numFunc = num => {
  return function(func) {
    if (func) {
      return func(num);
    }
    return num;
  }
}
const one = numFunc(1);
const two = numFunc(2);
const five = numFunc(5);
const seven = numFunc(7);
const add = num1 => num2 => {
  return num2 + num1;
}
const subtract = num1 => num2 => {
  return num2 - num1;
}
// console.log(five(add(one()))) // 6
console.log(seven(subtract(two()))) // 5
*/

// №7 - Написать функцию myNew, чтобы она работала как конструктор, но без вызова new.
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function myNew(constr, ...args){
  const instance = Object.create(Person.prototype);
  Person.apply(instance, args);
  return instance;
}
var person = myNew(person, "Vasia", 34);
console.log(person instanceof Person) // true;
*/

// №8 Найти сумму всех values
/*
const obj = {
  value: 4,
  next: [
    {
      value: 3,
    },
    {
      value: 3,
      next: [
        {
          value: 3,
          next: [
            {
              value: 10,
            },
          ]
        },
      ]
    }
  ]
}

function getSum(obj) {
  let value = obj.value;
  if (obj.next) {
    value += obj.next.map(getSum).reduce((acc, item) => acc + item, 0);
    console.log(value)
  }
  return value;
}
console.log(getSum(obj));
*/

// const call = (arr) => {
//   let current = 0;
//   let best = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       current++;
//       best = Math.max(...[current, best]);
//     } else {
//       current = 0;
//     }
//   }
//   return best;
// }
//
// const a = call([1, 1, 0, 0, 1, 1]);
// const b = call([1, 1, 1, 0, 1, 1, 1, 1]);
// const c = call([1, 1, 1, 1, 1, 1]);
// const d = call([0, 0, 1]);
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const cloneObj = (obj) => {
//   let clone = Object.assign({}, obj);
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === 'object') {
//         clone[key] = cloneObj(obj[key]);
//       }
//     }
//   }
//   return clone;
// }

// const obj = {
//   name: 'Miras',
//   sizes: {
//     height: 170,
//     width: 50,
//   },
// };

// const clone = cloneObj(obj);
// clone.sizes.height = 180;
// console.log(clone.sizes.height); // 180
// console.log(obj.sizes.height); // 170

// Более простое решение:
// const clone2 = JSON.parse(JSON.stringify(obj));
// полностью скопированный объект

let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi.bind(user), 1000);

const counter = (str) => {
  let current = 1;
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      current++;
    } else if (current !== 1) {
      result += str[i];
      result += current;
      current = 1;
    } else {
      result += str[i];
    }
  }
  return result;
}

const a = counter('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')

console.log(a);
