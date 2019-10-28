let arr = [1,2,3,4]

// arr.unshift() // 从前面添加元素, 返回值是添加完后的数组的长度

// arr.push() // 从后面添加元素，返回值为添加完后的数组的长度

// arr.shift() // 从前面删除元素，只能删除一个 返回值是删除的元素

// arr.pop() // 从后面删除元素，只能是一个，返回值是删除的元素

// arr.splice(i,n,item1,.....,itemX) // 删除从i(索引值)开始之后的那个元素。返回值是删除的元素   item1,.....,itemX是添加的元素,可有可无    //  i 索引值      n 个数             改变原数组
// console.log(arr.splice(1,2)) // 2,3   从索引值为1的地方开始的个数2   

// arr.concat() // 连接两个数组 返回值为连接后的新数组
// console.log(arr.concat([7,8,9]))    // [ 1, 2, 3, 4, 7, 8, 9 ]

// str.split() // 将字符串转化为数组
// let str = '123456'
// console.log(str.split('')) // ["1", "2", "3", "4", "5", "6"]

// arr.sort() // 将数组进行排序,返回值是排好的数组，默认是按照最左边的数字进行排序，不是按照数字大小排序的          改变原数组
// let arr = [2,10,6,1,4,22,3]
// console.log(arr.sort())   // [1, 10, 2, 22, 3, 4, 6]
// console.log(arr)
// let arr1 = arr.sort((a, b) =>a - b)  
// console.log(arr1)   // [1, 2, 3, 4, 6, 10, 22]
// let arr2 = arr.sort((a, b) =>b-a)  
// console.log(arr2)  // [22, 10, 6, 4, 3, 2, 1]

// arr.reverse() // 将数组反转,返回值是反转后的数组                                                     改变原数组

// arr.slice(start,end) // 切去索引值start到索引值end的数组，不包含end索引的值，返回值是切出来的数组

// arr.forEach(callback) // 遍历数组,无return  即使有return，也不会返回任何值，并且会影响原来的数组            改变原数组
// callback的参数：value --当前索引的值  index --索引   array --原数组

// arr.map(callback) // 映射数组(遍历数组),有return 返回一个新数组 。
// callback的参数： value --当前索引的值 index --索引 array --原数组

// arr.forEach()和arr.map()的区别 
//     1. arr.forEach()是和for循环一样，是代替for。arr.map()是修改数组其中的数据，并返回新的数据。
//     2. arr.forEach() 没有return  arr.map() 有return

// arr.filter(callback) 过滤数组，返回一个满足要求的数组 
// callback的参数： value --当前索引的值 index --索引
// let arr1 = arr.filter( (value, index) => value<3)
// console.log(arr1)

// arr.every(callback) // 依据判断条件，数组的元素是否全满足，若满足则返回ture
// callback的参数： value --当前索引的值 index --索引
// let arr1 = arr.every( (value, index) =>value<3)
// console.log(arr1) // false
// let arr2 = arr.every( (value, index) =>value<6)
// console.log(arr2)  // true

// arr.some() // 依据判断条件，数组的元素是否有一个满足，若有一个满足则返回ture
// callback的参数： value --当前索引的值 index --索引
// let arr1 = arr.some( (value, index) =>value<3)
// console.log(arr1) // true
// let arr2 = arr.some( (value, index) =>value>6)
// console.log(arr2) // false

// arr.reduce(callback, initialValue) // 迭代数组的所有项，累加器，数组中的每个值（从左到右）合并，最终计算为一个值
// 参数： callback: previousValue 必选 --上一次调用回调返回的值，或者是提供的初始值（initialValue）
// 　　　　　　　　　 currentValue 必选 --数组中当前被处理的数组项
// 　　　　　　　　　 index 可选 --当前数组项在数组中的索引值
// 　　　　　　　　　 array 可选 --原数组
// 　　　 initialValue: 可选 --初始值

// 实行方法：回调函数第一次执行时，preValue 和 curValue 可以是一个值，如果 initialValue 在调用 reduce() 时被提供，那么第一个 preValue 等于 initialValue ，并且curValue 等于数组中的第一个值；如果initialValue 未被提供，那么preValue 等于数组中的第一个值.
// let arr1 = arr.reduce((preValue, curValue) => 
//     preValue + curValue
// )
// console.log(arr1)    // 10
// let arr2 = arr.reduce((preValue,curValue)=>preValue + curValue,5)
// console.log(arr2)  // 15
// reduce的高级用法
// let names = ['peter', 'tom', 'mary', 'bob', 'tom','peter'];
// let nameNum = names.reduce((pre,cur)=>{
//   if(cur in pre){
//     pre[cur]++
//   }else{
//     pre[cur] = 1
//   }
//   return pre
// },{})
// console.log(nameNum); //{ peter: 2, tom: 2, mary: 1, bob: 1 }
// 数组去重
// let arr1 = [1,2,3,4,4,1]
// let newArr = arr1.reduce((pre,cur)=>{
//     if(!pre.includes(cur)){
//       return pre.concat(cur)
//     }else{
//       return pre
//     }
// },[])
// console.log(newArr);// [1, 2, 3, 4]
// 将多维数组转化为一维                                         //   ??????
// let arr1 = [[0, 1], [2, 3], [4,[5,6,7]]]
// const newArr = function(arr1){
//     return arr1.reduce(
//        (pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[]
//     )
// }
// console.log(newArr(arr1)) //[0, 1, 2, 3, 4, 5, 6, 7]

// arr.reduceRight(callback, initialValue) 与arr.reduce()功能一样，不同的是，reduceRight()从数组的末尾向前将数组中的数组项做累加。
// 　　实行方法：reduceRight()首次调用回调函数callbackfn时，prevValue 和 curValue 可以是两个值之一。如果调用 reduceRight() 时提供了 initialValue 参数，则 prevValue 等于 initialValue，curValue 等于数组中的最后一个值。如果没有提供 initialValue 参数，则 prevValue 等于数组最后一个值， curValue 等于数组中倒数第二个值。

// arr.indexOf() // 查找某个元素的索引值，若有重复的，则返回第一个查到的索引值若不存在，则返回 -1

// arr.lastIndexOf()   // 和arr.indexOf()的功能一样，不同的是从后往前查找

// Array.from() // 将伪数组变成数组，就是只要有length的就可以转成数组。 ---es6
// let str = '12345'
// console.log(Array.from(str))    // ["1", "2", "3", "4", "5"]
// let obj = {0:'a',1:'b',length:2}
// console.log(Array.from(obj))   // ["a", "b"]

// Array.of() // 将一组值转换成数组，类似于声明数组    ---es6
// let str = '11'
// console.log(Array.of(str))   // ['11']
// // 等价于
// console.log(new Array('11'))  // ['11]
// new Array()有缺点，就是参数问题引起的重
// console.log(new Array(2))   //[empty × 2]  是个空数组
// console.log(Array.of(2))    // [2]

// arr.copyWithin() // 在当前数组内部，将指定位置的数组复制到其他位置，会覆盖原数组项，返回当前数组
// 参数:   target --必选 索引从该位置开始替换数组项
// 　　　  start --可选 索引从该位置开始读取数组项，默认为0.如果为负值，则从右往左读。
// 　　　　 end --可选 索引到该位置停止读取的数组项，默认是Array.length,如果是负值，表示倒数
// let arr = [1,2,3,4,5,6,7]
// let arr1 = arr.copyWithin(1)
// console.log(arr1)   // [1, 1, 2, 3, 4, 5, 6]
// let arr2 = arr.copyWithin(1,2)
// console.log(arr2)   // [1, 3, 4, 5, 6, 7, 7]
// let arr3 = arr.copyWithin(1,2,4)
// console.log(arr3)   // [1, 3, 4, 4, 5, 6, 7]

// arr.find(callback) // 找到第一个符合条件的数组成员
// let arr1 = arr.find((value, index, array) =>value > 2)
// console.log(arr1)   // 3

// arr.findIndex(callback) // 找到第一个符合条件的数组成员的索引值
// let arr1 = arr.findIndex((value, index, array) => value > 2)
// console.log(arr1)  // 2

// arr.fill(target, start, end) // 使用给定的值，填充一个数组               改变原数组
// 　　参数： target -- 待填充的元素
// 　　　　　 start -- 开始填充的位置-索引
// 　　　　   end -- 终止填充的位置-索引（不包括该位置)
// let arr3 = arr.fill(5,1,3)
// console.log(arr3)

// arr.includes() // 判断数中是否包含给定的值    // 布尔值

// 与indexOf()的区别：
// 1 indexOf()返回的是数值，而includes()返回的是布尔值
// 2 indexOf() 不能判断NaN，返回为-1 ，includes()则可以判断

// arr.keys() // 遍历数组的键名
// let arr2 = arr.keys()
// for (let key of arr2) {
//     console.log(key);   // 0,1,2,3
// }

// arr.values() // 遍历数组键值
// let arr1 = arr.values()
// for (let val of arr1) {
//      console.log(val);   // 1,2,3,4
// }

// arr.entries() // 遍历数组的键名和键值
// let arr1 = arr.entries()
// console.log(arr1)
// for (let e of arr1) {
//     console.log(e);   // [0,1] [1,2] [2,3] [3,4]
// }
// entries() // 方法返回迭代数组。
// 迭代数组中每个值 前一个是索引值作为 key， 数组后一个值作为 value。

// arr.join() //方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
// var elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// // expected output: "Fire,Air,Water"
// console.log(elements.join(''));
// // expected output: "FireAirWater"
// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"










/**
* Array
* JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
*/


/**
* 属性
*/
// Array.length
// get Array[@@species]
// Array.prototype  通过数组的原型对象可以为所有数组对象添加属性。


/**
* 方法
*/
Array.from()     // 从类数组对象或者可迭代对象中创建一个新的数组实例。 Array.from(arrayLike[, mapFn[, thisArg]])
Array.isArray()  // 用来判断某个变量是否是一个数组对象。
Array.of()       // 根据一组参数来创建新的数组实例，支持任意的参数数量和类型。  Array.of(element0[, element1[, ...[, elementN]]])

// 合并去重
// function aa() {
//   return [...[...arguments].flat()];
// }
// aa([1, 2], [2, 3])

// function aa() {
//   let arr = [...arguments].flat();
//   return Array.form(new Set(arr));
// }
// aa([1, 2], [2, 3])


/**
* 修改器方法  9
* 下面的这些方法会改变调用它们的对象自身的值
*/
Array.prototype.copyWithin()  // 实验性API
// 浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。  arr.copyWithin(target[, start[, end]])
Array.prototype.fill()  // 实验性API
// 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。  arr.fill(value[, start[, end]])
Array.prototype.pop()
// 删除数组的最后一个元素，并返回这个元素。
Array.prototype.push()
// 在数组的末尾增加一个或多个元素，并返回数组的新长度。
Array.prototype.shift()
// 删除数组的第一个元素，并返回这个元素。
Array.prototype.unshift()
// 在数组的开头增加一个或多个元素，并返回数组的新长度。
Array.prototype.splice()
// 在任意的位置给数组添加或删除任意个元素。
Array.prototype.reverse()
// 颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
Array.prototype.sort()
// 对数组元素进行排序，并返回当前数组。


/**
* 访问方法  10
* 下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。
*/
Array.prototype.flat()
// 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
Array.prototype.flatMap()
// 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
Array.prototype.concat()
// 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
Array.prototype.slice()
// 抽取当前数组中的一段元素组合成一个新数组。
Array.prototype.join()
// 连接所有数组元素组成一个字符串。
Array.prototype.toString()
// 返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法。
Array.prototype.toLocaleString()
// 返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 Object.prototype.toLocaleString() 方法。
Array.prototype.indexOf()
// 返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 - 1。
Array.prototype.lastIndexOf()
// 返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 - 1。
Array.prototype.includes()  // 实验性API
// 判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。
Array.prototype.toSource()  // This API has not been standardized.
// 返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 Object.prototype.toSource() 方法。


/**
* 迭代方法  12
* 在每一个数组元素都分别执行完回调函数之前，数组的length属性会被缓存在某个地方
*/
Array.prototype.forEach()
// 为数组中的每个元素执行一次回调函数。
Array.prototype.map()
// 返回一个由回调函数的返回值组成的新数组。
Array.prototype.filter()
// 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
Array.prototype.every()
// 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
Array.prototype.some()
// 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
Array.prototype.reduce()
// 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
Array.prototype.reduceRight()
// 从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。

Array.prototype.find()  // 实验性API
// 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
Array.prototype.findIndex()  // 实验性API
// 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 - 1。
Array.prototype.entries()  // 实验性API
// 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。
Array.prototype.keys()  // 实验性API
// 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。
Array.prototype.values()  // 实验性API
// 返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。
// Array.prototype[@@iterator]()  // 实验性API
// 和上面的 values() 方法是同一个函数。




// var arr = [
//   { id: 1, value: 'a' },
//   { id: 2, value: 'b' },
//   { id: 3, value: 'c' },
//   { id: 4, value: 'd' },
//   { id: 5, value: 'e' },
//   { id: 6, value: 'e' },
//   { id: 7, value: 'f' },
// ]

// // 1： 删除value为e的 
// arr = arr.filter(d => d.value !== 'e');

// // 2： 删除第一个value为e的
// let index = arr.findIndex(d => d.value === 'e');
// arr.splice(index, 1)
// // 3： 删除最后一个value为e的
// let index = arr.reverse().findIndex(d => d.value === 'e');
// arr.splice(index, 1);
// arr.reverse();
// // 4： 找出所有value为e的
// let newArr = arr.filter(d => d.value === 'e');
// // 5： 找出第一个value为e的
// let newArr = arr.find(d => d.value === 'e');
// // 6： 找出最后一个value为e的
// let newArr = arr.reverse().find(d => d.value === 'e').reverse();





/**
 * 检测数组
 */
// ECMAScript 3
if (value instanceof Array) {
  //对数组执行某些操作
}
// instanceof 操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实
// 际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的 Array 构造函数。如果你从
// 一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自
// 不同的构造函数。

// ECMAScript 5
if (Array.isArray(value)) {
  //对数组执行某些操作
}

/**
 * 归并方法  reduce()和 reduceRight()
 */
// 这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。
// 两个参数：在每一项上调用的函数 和（可选的）作为归并基础的初始值
// reduce()方法从数组的第一项开始，逐个遍历到最后。
// reduceRight()则从数组的最后一项开始，向前遍历到第一项。
// 支持这两个归并函数的浏览器有 IE9 +、Firefox 3 +、Safari 4 +、Opera 10.5 和 Chrome。

// var values = [1, 2, 3, 4, 5];
// var sum = values.reduce(function (prev, cur, index, array) {
//   return prev + cur;
// });
// alert(sum); //15 
