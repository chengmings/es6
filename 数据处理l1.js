var aaa = [
    {
        id: 1,
        materielName: '物料A',
        number: 1,
    },
    {
        id: 2,
        materielName: '物料B',
        number: 1,
    },
    {
        id: 3,
        materielName: '物料C',
        number: 1,
    },
    {
        id: 4,
        materielName: '物料A',
        number: 1,
    },
    {
        id: 5,
        materielName: '物料B',
        number: 1,
    },
    {
        id: 6,
        materielName: '物料C',
        number: 1,
    },
]

console.log([...new Set(aaa.map(({materielName}) => materielName))].map(t => ({[t]: aaa.reduce((res,{materielName, number}) => materielName === t ? res + number : res,0)})))

// var bbb = {
//     '物料A': 2,
//     '物料B': 2,
//     '物料C': 2,
// }

// var bbb = [
//     {
//         '物料A': 2,
//     },
//     {
//         '物料B': 2,
//     },
//     {
//         '物料C': 2,
//     }
// ]


console.log([...new Set(aaa.map(({materielName}) => materielName))].map(t => ({number: aaa.reduce((res,{materielName, number}) => materielName === t ? res + number : res,0),materielName:t})))

var bbb = [
    {
        materielName:'物料A',
        number: 2,
    },
    {
        materielName:'物料B',
        number: 2,
    },
    {
        materielName:'物料C',
        number: 2,
    }
]