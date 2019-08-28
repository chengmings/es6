//  '410381199412170519'
const ID = '410381199412170519'
// const year = ID.slice(6, 9)
// const month = ID.slice(10, 11)
// const data = ID.slice(12, 13)
// const year = '1994'
// const month = '12'
// const data = '17'
ddd = function (a, b, c) {
  if (2019 - a > 18 || 2019 - a === 18 || 2019 - a === 60 || 2019 - a < 60) {
    if (2019 - a === 18) {
      if (8 - b > 0 || 8 - b === 0) {
        if (8 - b === 0) {
          if (29 - c < 0 || 29 - c === 0) {
            // console.log(11)
            return '不在'
          } else {
            // console.log(22)
            return '在'
          }
        } else {
          // console.log(11)
          return '在'
        }
      } else {
        // console.log(11)
        return '在'
      }
    } else if (2019 - a === 60) {
      if (8 - b < 0 || 8 - b === 0) {
        if (8 - b === 0) {
          if (29 - c < 0) {
            return '在'
          } else {
            return '不在'
          }
        } else {
          return '在'
        }
      } else {
        return '在'
      }
    } else {
      return '不在'
    }
  } else {
    return '不在'
  }
}
console.log(ddd(2001, 8, 30))


// let idcard = '410381199412170519';
// let b = idcard.substr(6, 8);
// let b18 = b.replace(/^(.{4})(.{2})(.{2})$/, (_, $1, $2, $3) => `${$1 - 0 + 18}/${$2}/${$3}`);
// let b60 = b.replace(/^(.{4})(.{2})(.{2})$/, (_, $1, $2, $3) => `${$1 - 0 + 60}/${$2}/${$3}`);
// let today = new Date().toLocaleDateString();
// console.log(b, b18, b60, today)
// if (+new Date(today) > +new Date(b18) && +new Date(today) < +new Date(b60)) {
//   console.log(true)
// }