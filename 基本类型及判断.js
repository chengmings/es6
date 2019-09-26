// 基本类型：undefined,null,Boolean,String,Number,Symbol
// 引用类型：Object,Array,Date,Function,RegExp等

// 常用的变量类型有11种：Number,String,Boolean,Object,Array,Function,undefined,Null,Json,Date,RegExp,Error

// js判断类型的方法
// 使用typeof能判断出四种，分别是number，string，boolean，object，剩余的均被检测为object

// 使用instanceof，根据instanceof的定义：判断参照对象的prototype属性所指向的对象是否在被行测对象的原型链上
class Person{
  constructor(name){
    this.name= name;  
 }
}

let p = new Person('张三')
console.log(p instanceof  Person) //ture
// console.log(p)  // Person {name: "张三"}
// 按照定义描述就是Person的prototype属性所指向的原型对象是否存在于p的原型链中。
// 这种变量判断可以检测出9种,undefined和null被检测为object,因为js中没有这种全局类型

// 对于number,string,boolean这三种类型 
// 只有通过构造函数定义比如:
// let num =new Number(1);
// let str =  new String('abc');
// let bool = new Boolean(true);
// 这样定义才能检测出.

// let num = 1;
// let str = 'abc';
// let bool = true;
// 这样定义是检测不出来的

// 使用constructor检测
// 针对于instanceof的弊端，我们使用constructor检测，constructor是原型对象的属性指向构造函数。
// 这种方式解决了instanceof的弊端,可以检测出除了undefined和null的9种类型
// 但是这种方式仍然有个弊端,就是constructor所指向的的构造函数是可以被修改的.

class Student {
  constructor(age){
    this.age =age;
 }
}
Student.prototype = new Person('张三')
Student.prototype.constructor === 'Person'  //true
