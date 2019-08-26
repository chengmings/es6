// Generator 函数 异步编程解决方案
// Generator 函数是一个状态机，封装了多个内部状态。
// Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
// Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }

// var hw = helloWorldGenerator();
// // Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
// console.log(hw)         // Object [Generator] {}
// console.log(hw.next())  // { value: 'hello', done: false }
// console.log(hw.next())  // { value: 'world', done: false }
// console.log(hw.next())  // { value: 'ending', done: true }
// console.log(hw.next())  // { value: 'undefined', done: true }

// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth // 5
// console.log(first, second, third, fourth, fifth, sixth)


// 遍历器对象的next方法的运行逻辑如下。
// （1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
// （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
// （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
// （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
// 需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。

// function* gen() {
//   yield  123 + 456;
// }
// var a = gen()
// console.log(a)
// console.log(a.next())
// console.log(a.next())

// function* f() {
//   console.log('执行了！')
// }
// var generator = f();
// setTimeout(function () {
//   generator.next()
// }, 2000);

// yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
// SyntaxError: Unexpected identifier
// var arr = [1, [[2, 3], 4], [5, 6]];
// var flat = function* (a) {
//   a.forEach(function (item) {
//     if (typeof item !== 'number') {
//       yield* flat(item)
//     } else {
//       yield item
//     }
//   });
// };
// for (var f of flat(arr)){
//   console.log(f);
// }

var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}