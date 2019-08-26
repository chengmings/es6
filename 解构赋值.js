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
// fibs是一个 Generator 函数，原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。