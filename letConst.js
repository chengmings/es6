// let声明的命令只在代码块内有效。
// for (let i = 0; i < 10; i++) {
//   // ...
// }

// console.log(i);   // 打印不出来因为let是块内的

// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     // console.log(i);
//   };
// }
// a[6](); // 10

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     // console.log(i);
//   };
// }
// a[6](); // 6

// 函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。
// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }
// abc
// abc
// abc
var a 
if(a){
  console.log(1111)
}