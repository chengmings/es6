// 数组的解构赋值
// let a = 1;
// let b = 2;
// let c = 3;
// let [a, b, c] = [1, 2, 3];

// let [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3

// let [, , third] = ["foo", "bar", "baz"];
// third // "baz"

// let [x, , y] = [1, 2, 3];
// x // 1
// y // 3

// let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

// let [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []

// 如果解构不成功，变量的值就等于undefined。
// let [foo] = [];
// let [bar, foo] = [1];
// 以上两种情况都属于解构不成功，foo的值都会等于undefined。

// 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
// let [x, y] = [1, 2, 3];
// x // 1
// y // 2

// let [a, [b], d] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4

// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错

// let [x, y, z] = new Set(['a', 'b', 'c']);
// x // "a"

// fibs是一个 Generator 函数，原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。
// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(first, second, third, fourth, fifth, sixth) // 0 1 1 2 3 5

// 默认值
// 解构赋值允许指定默认值。
// let [foo = true] = [];     foo // true
// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

// ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
// let [x = 1] = [undefined]   // x // 1
// let [x = 1] = [null]  // x // null           // null不严格等于undefined。

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
function f() {
  console.log('aaa');
}
// let [x = f()] = [undefined]  // 此时x为undefined
// let [x = f()] = [1] // 此时x为1

//什么鬼
let x;
if ([1][0] === undefined) {
  x = f();
} else {
  x = [1][0];
}
console.log(x)

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined
// 最后一个表达式之所以会报错，是因为x用y做默认值时，y还没有声明。


// 对象的解构赋值