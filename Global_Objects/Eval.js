// eval(string)
// string  一个表示 JavaScript 表达式、语句或一系列语句的字符串。表达式可以包含变量与已存在对象的属性。
// 返回字符串中代码的返回值。如果返回值为空，则返回 undefined。

// console.log(eval(new String("2+2")))        // String {"2+2"}
// console.log(eval("2 + 2") )                 // 4
// var expression = new String("2 + 2")
// console.log(eval(expression.toString()))    // 4

function test() {
    var x = 2, y = 4;
    console.log(eval('x + y'));  // 直接调用，使用本地作用域，结果是 6
    var geval = eval; // 等价于在全局作用域调用
    console.log(geval('x + y')); // 间接调用，使用全局作用域，throws ReferenceError 因为`x`未定义
    (0, eval)('x + y'); // 另一个间接调用的例子
​}

// test()  // String {"2+2"}