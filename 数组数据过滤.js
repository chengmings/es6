let aaa = [
    {
        id:1,
        name: '小孙',
        type: 1,
    },
    {
        id:2,
        name: '小李',
        type: 2,
    },
    {
        id:3,
        name: '小华',
        type: 3,
    },
    {
        id:4,
        name: '小韩',
        type: 1,
    },
    {
        id:5,
        name: '小邱',
        type: 2,
    },
    {
        id:6,
        name: '小赵',
        type: 1,
    },
    {
        id:7,
        name: '小郝',
        type: 1,
    },
    {
        id:8,
        name: '小杨',
        type: 3,
    },
]

let aa = [1,2]
console.log(aa.reduce((result, item, index) => [...result, ...aaa.filter(obj => obj.type === item)], []))

// let aa = new Date()
// console.log(aa.getMonth())

// reduce
// arr.reduce(function(prev,cur,index,arr){
//     ...
// }, init);

// arr 表示原数组；
// prev 表示上一次调用回调时的返回值，或者初始值 init;
// cur 表示当前正在处理的数组元素；
// index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
// init 表示初始值。

// let arr = [3,9,4,3,6,0,9];

// var sum = arr.reduce(function (prev, cur) {
//     return prev + cur;
// },0)
// console.log(sum)

// var max = arr.reduce(function (prev, cur) {
//     return Math.max(prev,cur);
// })
// console.log(max)

// var newArr = arr.reduce(function (prev, cur) {
//     prev.indexOf(cur) === -1 && prev.push(cur);
//     return prev
// },[])
// console.log(newArr)

// 初始化一个空数组
// 将需要去重处理的数组中的第1项在初始化数组中查找，如果找不到（空数组中肯定找不到），就将该项添加到初始化数组中
// 将需要去重处理的数组中的第2项在初始化数组中查找，如果找不到，就将该项继续添加到初始化数组中
// 将需要去重处理的数组中的第n项在初始化数组中查找，如果找不到，就将该项继续添加到初始化数组中
// 将这个初始化数组返回

// reduceRight()
// 该方法用法与reduce()其实是相同的，只是遍历的顺序相反，它是从数组的最后一项开始，向前遍历到第一项。