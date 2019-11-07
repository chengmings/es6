/** 1 */
// 用户定义的对象定义 getter 和 setter 以支持新增的属性。
// obj创建一个伪属性latest，它会返回log数组的最后一个元素。
// var obj = {
//     // log: ['example','test'],
//     get latest() {
//       if (this.log.length == 0) return undefined;
//       return this.log[this.log.length - 1];
//     }
//   }
// console.log(obj.latest); // "test".

//   使用defineProperty在现有对象上定义 getter
// var o = { a:0 }
// Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });
// console.log(o.b) // Runs the getter, which yields a + 1 (which is 1

// 使用getter和setter方法扩展 Date原型，为预定义好的Date类添加一个year的属性。定义属性year的getter和setter方法用到了Date类中已存在的getFullYear和setFullYear方法
// Object.defineProperty(Date.prototype, "year", {
//     get: function() {
//         return this.getFullYear()
//     },
//     set: function(y) {
//         this.setFullYear(y)
//     }
// });
// var now = new Date();
// console.log(now.year); // 2019
// now.year = 2001;
// console.log(now);

/** 2 */
// es6可以通过proxy重写元程序，针对整体的get算法进行重写
// obj中的name是数据属性
// get、set后的age属性是访问器属性，访问器属性：当外部js给age赋值时走的时setter函数，当外部js获取age时 走的getter函数,setter和getter是隐藏函数，会取我们写在age后边的函数。

let obj = {
    name : 1,
    get age(){
        return 22
    },
    set age(value){
        console.log('set')
        obj.name=value 
    }
}
obj.age = 300
console.log('obj1',obj.age)//22
console.log('obj2',obj.name)//300               //为啥 这个不是没调用set age这个函数吗
