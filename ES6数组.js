// map  filter  foreach every some find reduce 

// 扩展运算符（...）
// 对数组的处理

// [...Array(30).keys()].map(i=>console.log(i))
// console.log(Array(30).keys()) // Object [Array Iterator] {}
// console.log(...Array(30).keys())  // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29

// console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

// function push(array, ...items) {
//   array.push(...items);
// }
// function add(x, y) {
//   return x + y;
// }
// const numbers = [4, 38];
// add(...numbers) // 42

// function f(v, w, x, y, z) { }
// const args = [0, 1];
// f(-1, ...args, 2, ...[3]);

// const arr = [
//   ...(x > 0 ? ['a'] : []),
//   'b',
// ];

// [...[], 1]  // [1]

// 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。
// console.log((...[1, 2]))   // Uncaught SyntaxError: Unexpected number
// console.log(...[1, 2])

// ES5 的写法
// function f(x, y, z) {
//   return x + y + z
// }
// var args = [0, 1, 2];
// f.apply(null, args)

// ES6的写法
// function f(x, y, z) {
//   // ...
//   return x + y + z
// }
// let args = [0, 1, 2];
// console.log(f(...args))

// // ES5 的写法
// console.log(Math.max.apply(null, [14, 3, 77]))
// // ES6 的写法
// console.log(Math.max(...[14, 3, 77]))
// // 等同于
// console.log(Math.max(14, 3, 77))

// // ES5 的写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// Array.prototype.push.apply(arr1, arr2)
// console.log(arr1)

// // ES6 的写法
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // 向数组的末尾添加一个或更多元素，并返回新的长度。
// console.log(arr1.push(...arr2))
// arr1.push(...arr2)
// console.log(arr1)

// ES5
// console.log(new (Date.bind.apply(Date, [null, 2015, 1, 1])))
// ES6
// console.log(new Date(...[2015, 1, 1]))

// 扩展运算符的应用
// 1.复制数组
// const a1 = [1, 2];
// const a2 = a1;  // a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。
// ES5 只能用变通方法来复制数组。
// const a1 = [1, 2];
// const a2 = a1.concat();
// 扩展运算符提供了复制数组的简便写法。
// const a1 = [1, 2]
// 写法一
// const a2 = [...a1];
// console.log(a2)
// 写法二
// const [...a2] = a1
// console.log(a2)

// 2.合并数组
// const arr1 = ['a', 'b']
// const arr2 = ['c']
// const arr3 = ['d', 'e']
// // ES5 的合并数组   // concat不会改变现有数组，生成一个新的数组
// 这两个都是浅拷贝
// console.log(arr1.concat(arr2, arr3))
// console.log([...arr1, ...arr2, ...arr3])

// 深拷贝和浅拷贝   B复制了A A变化B也变化那么为浅拷贝 A变化B没有变化为深拷贝

// const a1 = [{ foo: 1 }];
// const a2 = [{ bar: 2 }];

// const a3 = a1.concat(a2);
// const a4 = [...a1, ...a2];

// console.log(a3[0] === a1[0]) // true
// console.log(a4[0] === a1[0]) // true
// console.log(a3[1] === a2[0]) // true
// console.log(a4[1] === a2[0]) // true
// console.log(a3 === a4) // false
// console.log(a3[0] === a4[0]) // true
// console.log(a3[1] === a4[1]) // true

// 与解构赋值结合
// // ES5
// a = list[0], rest = list.slice(1)
// // ES6
// [a, ...rest] = list

// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]
// const [first, ...rest] = [];
// first // undefined
// rest  // []
// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
// const [...butLast, last] = [1, 2, 3, 4, 5]; // 报错
// const [first, ...middle, last] = [1, 2, 3, 4, 5]; // 报错

// 对字符串的处理
// console.log([...'hello']) // [ 'h', 'e', 'l', 'l', 'o' ]
// 上面的写法，有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符。     不懂
// console.log('x\uD83D\uDE80y'.length) // 4
// console.log([...'x\uD83D\uDE80y'].length) // 3
// 上面代码的第一种写法，JavaScript 会将四个字节的 Unicode 字符，识别为 2 个字符，采用扩展运算符就没有这个问题。因此，正确返回字符串长度的函数，可以像下面这样写。
// function length(str) {
//   return [...str].length;
// }
// length('x\uD83D\uDE80y') // 3
// 凡是涉及到操作四个字节的 Unicode 字符的函数，都有这个问题。因此，最好都用扩展运算符改写。
// let str = 'x\uD83D\uDE80y';
// str.split('').reverse().join('')  // 'y\uDE80\uD83Dx'

// [...str].reverse().join('') // 'y\uD83D\uDE80x'
// 上面代码中，如果不用扩展运算符，字符串的reverse操作就不正确。    不懂
// var a = [1,2,3]
// var b = JSON.stringify(a)
// var c = JSON.parse(JSON.stringify(a)) 
// console.log(b,c)

// var a = [1,2,3]
// var b = [1,2,3]
// var a = {
//   a:1,
//   b:2,
//   c:3
// }
// var b = {
//   a:1,
//   b:2,
//   c:3
// }
// console.log(a===b)  // false
// console.log(JSON.stringify(a)===JSON.stringify(b)) // true
// console.log(JSON.parse(JSON.stringify(a))===JSON.parse(JSON.stringify(b))) // false
// console.log(JSON.parse(JSON.stringify(a))===JSON.parse(JSON.stringify(a))) // false


// map
// var arr = [1, 2, 4, 3, 5, 6]
// var b = [1, 3, 5, 7]
// // 不改变原数组  遍历一次数组，生成一个新数组
// // arr.map(function (value, index, arr) {
// //   console.log(value, index, arr)
// // }, this.b)
// arr.forEach(function (item, index, arr) {
//   console.log(item, index, arr)
// })