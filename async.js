// async/await特点
// async/await更加语义化，async 是“异步”的简写，async function 用于申明一个 function 是异步的；
// await，可以认为是async wait的简写， 用于等待一个异步方法执行完成；
// async/await是一个用同步思维解决异步问题的方案（等结果出来之后，代码才会继续往下执行）
// 可以通过多层 async function 的同步写法代替传统的callback嵌套

// async function语法
// 自动将常规函数转换成Promise，返回值也是一个Promise对象
// 只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数
// 异步函数内部可以使用await
// [return_value] = await expression;
// expression:  一个 Promise  对象或者任何要等待的值。
// 返回值:返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身

// 错误处理  
// 在async函数里，无论是Promise reject的数据还是逻辑报错，都会被默默吞掉,所以最好把await放入try{}catch{}中，
// catch能够捕捉到Promise对象rejected的数据或者抛出的异常
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {reject('error')}, ms);  //reject模拟出错，返回error
//   });
// }
// async function asyncPrint(ms) {
//   try {
//      console.log('start');
//      await timeout(ms);  //这里返回了错误
//      console.log('end');  //所以这句代码不会被执行了
//   } catch(err) {
//      console.log(err); //这里捕捉到错误error
//   }
// }
// asyncPrint(1000);

// 如果不用try/catch的话，也可以像下面这样处理错误（因为async函数执行后返回一个promise）
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {reject('error')}, ms) //reject模拟出错，返回error
//   })
// }
// async function asyncPrint(ms) {
//   console.log('start')
//   await timeout(ms)
//   console.log('end')  //这句代码不会被执行了
// }
// asyncPrint(1000).catch(err => {
//     console.log(err) // 从这里捕捉到错误
// });

// 如果你不想让错误中断后面代码的执行，可以提前截留住错误，像下面
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('error')
//     }, ms)  //reject模拟出错，返回error
//   })
// }
// async function asyncPrint(ms) {
//   console.log('start')
//   await timeout(ms).catch(err => {  // 注意要用catch
//     console.log(err) 
//   })
//   console.log('end');  //这句代码会被执行
// }
// asyncPrint(1000);

// 多个await命令的异步操作，如果不存在依赖关系（后面的await不依赖前一个await返回的结果），
// 用Promise.all()让它们同时触发
// function test1 () {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve(1)
//       }, 1000)
//   })
// }
// function test2 () {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve(2)
//       }, 2000)
//   })
// }

// async function exc1 () {
//   console.log('exc1 start:',Date.now())
//   let res1 = await test1();
//   let res2 = await test2(); // 不依赖 res1 的值
//   console.log('exc1 end:', Date.now())
// }

// async function exc2 () {
//   console.log('exc2 start:',Date.now())
//   let [res1, res2] = await Promise.all([test1(), test2()])     //更快
//   console.log('exc2 end:', Date.now())
// }
// exc1();
// exc2();
