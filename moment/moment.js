var moment = require('moment');

// 日期格式化
console.log(moment().format())                                  // 2019-12-19T18:29:06+08:00
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))         // 十二月 19日 2019, 6:49:29 晚上
console.log(moment().format('dddd'))                            // 星期四
console.log(moment().format("MMM Do YY"))                       // 12月 19日 19
console.log(moment().format('YYYY [escaped] YYYY'))             // 2019 escaped 2019

// 相对时间
moment("20111031", "YYYYMMDD").fromNow();                       // 8 年前
moment("20120620", "YYYYMMDD").fromNow();                       // 7 年前
moment().startOf('day').fromNow();                              // 19 小时前
moment().endOf('day').fromNow();                                // 5 小时内
moment().startOf('hour').fromNow();                             // 1 小时前

// 日历时间
moment().subtract(10, 'days').calendar();                       // 2019年12月9日
moment().subtract(6, 'days').calendar();                        // 上周五晚上6点50
moment().subtract(3, 'days').calendar();                        // 本周一晚上6点50
moment().subtract(1, 'days').calendar();                        // 昨天晚上6点50分
moment().calendar();                                            // 今天晚上6点50分
moment().add(1, 'days').calendar();                             // 明天晚上6点50分
moment().add(3, 'days').calendar();                             // 本周日晚上6点50
moment().add(10, 'days').calendar();                            // 2019年12月29日

// 多语言支持
moment().format('L');    // 2019-12-19
moment().format('l');    // 2019-12-19
moment().format('LL');   // 2019年12月19日
moment().format('ll');   // 2019年12月19日
moment().format('LLL');  // 2019年12月19日晚上6点50分
moment().format('lll');  // 2019年12月19日晚上6点50分
moment().format('LLLL'); // 2019年12月19日星期四晚上6点50分
moment().format('llll'); // 2019年12月19日星期四晚上6点50分