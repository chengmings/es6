// https://es6.ruanyifeng.com/#docs/promise

// Promise 的含义
// 基本用法
// Promise.prototype.then()
// Promise.prototype.catch()
// Promise.prototype.finally()
// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()
// Promise.resolve()
// Promise.reject()
// 应用
// Promise.try()

// 特点
// 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

// 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

// 后面的resolved统一只指fulfilled状态，不包含rejected状态。

// const promise = new Promise(function(resolve, reject) {
//     // ... some code
//     if (/* 异步操作成功 */){
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });
