var arr = [
  {
    a: '1',
    b: [
      {
        c1: {
          d1: {
            project: [1]
          },
          d2: {
            project: [1]
          },
          d3: {
            project: [1]
          }
        }
      },
      {
        c2: {
          d1: {
            project: [1]
          },
          d2: {
            project: [1]
          },
          d3: {
            project: [1]
          }
        }
      },
    ]
  }
]

Object.keys(arr[0].b[0]).forEach(key => {
  console.log(key)
})

// arr.forEach(abc => {
//   abc.b.forEach(abc2 => {
//     Object.keys(abc2).map(key => (
//       console.log(key)
//     ))
//   })
// })