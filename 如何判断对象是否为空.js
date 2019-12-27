// var data = {};
// var b = (JSON.stringify(data) == "{}");
// console.log(JSON.stringify(data))
// console.log(b) //true

var data = {};
var arr = Object.keys(data);
console.log(Object.keys(data))
console.log(arr.length == 0); //true 为空， false 不为空

// let aaa = {
//     a: 1,
//     b: 2,
// }
// console.log(Object.keys(aaa))

var aa = [{aaa:1},2,3,4]
var bb = [5,5]
// var bb = {aaa:1}
console.log(aa,...bb)
