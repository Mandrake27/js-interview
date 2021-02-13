// Замыкание - это момент когда функция замыкает в себе значение из вышестоящего уровня видимости;
// function getInfoAbout(name) {
//   return function(age) {
//     return `Hello, my name is ${name} and I am ${age} years old`;
//   }
// }
//
// const mirasGetter = getInfoAbout('Miras');
// const mirasInfo = mirasGetter(27);
// console.log(mirasInfo)

// const createFrameworkManager = () => {
//   const fw = ['Angular', 'React'];
//   return {
//     add: framework => {
//       fw.push(framework);
//     },
//     print: () => {
//       console.log(fw.join(' '));
//     }
//   }
// }
//
// const manager = createFrameworkManager();
// manager.print();
// manager.add('VueJS');
// manager.print();

const arr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < arr.length; i ++) {
  (function(j) {
    setTimeout(() => {
      console.log(`arr[${j}] = ${arr[j]}`);
    }, 1500);
  })(i)
}
