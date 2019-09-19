var a = [  {
    id: 1,
    items: [      
      {
        no: '123123',
      },
    ]
  },
]

a.forEach(item => {
  item.items.forEach(subItem => {
    subItem.times = {};
    for (var i = 0; i < 12; i++) {
      subItem.times[`time-${i}`] = {
        project: [          {
            name: '项目1',
            number: 1,
          }
        ],
        count: 1,
      }
    }
  })
})

console.log(a)
