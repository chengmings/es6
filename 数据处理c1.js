let aaa = [
    {
        name: 'pppp',
        endUserOrders: [
            {
                xxx: 'oooo',
                ccc: [
                    {
                        name1: 'xxx', 
                        number: 1,
                    },
                    {
                        name1: 'xxxx', 
                        number: 2,
                    }
                ]
            },
            {
                xxx: 'ooo',
                ccc: [
                    {
                        name1: 'xxx', 
                        number: 1,
                    },
                    {
                        name1: 'xxxxx', 
                        number: 2,
                    }
                ]
            },
            
        ],
    }
]

var arr = [];
aaa.forEach(d => {
  d.endUserOrders.forEach(d1 => {
    d1.ccc.forEach(d2 => {
      var index = arr.findIndex(d3 => d3.name1 === d2.name1);
      console.log(index,~index)
      if (~index) {
        arr[index].number += d2.number;
      } else {
        arr.push({
          name1: d2.name1,
          number: d2.number,
        })
      }
    })
  })
})

// let bbb = []
// aaa[0].endUserOrders.forEach(d=>{
//     d.ccc.forEach(dd=>{
//         if(bbb.length === 0){
//             bbb.push(dd)
//         }else{
//             bbb.forEach(ddd=>{
//                 if(ddd.name1 === dd.name1){
//                     ddd.number += dd.number 
//                 }else{
//                     bbb.push(dd)
//                 }
//             })
//         }
        
//     })
// })

// console.log(bbb)

// aaa.forEach(d=>{
//     d.endUserOrders.forEach(dd=>{
//         dd.ccc.forEach(ddd=>{
//             bbb.forEach(dddd=>{
//                 if(dddd.name1 === ddd.name1){
//                     dddd.number += ddd.number
//                 }else{
//                     bbb.push(ddd)
//                 }
//             })
//         })
//     })
// })

// [
//     {
//         name1: 'xxx', 
//         number: 2,
//     },
//     {
//         name1: 'xxxx', 
//         number: 2,
//     },
//     {
//         name1: 'xxxxx', 
//         number: 2,
//     }
// ]