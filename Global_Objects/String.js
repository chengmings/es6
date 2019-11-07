// 有问题的  没看 什么鬼

// string方法MDN地址 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String

/**
 * 转义字符
   \0	空字符
   \'	单引号
   \"	双引号
   \\	反斜杠
   \n	换行
   \r	回车
   \v	垂直制表符
   \t	水平制表符
   \b	退格
   \f	换页
   \uXXXX	unicode 码
   \u{X} ... \u{XXXXXX}	unicode codepoint 
   \xXX	Latin-1 字符(x小写)
*/
/**
 *  属性
    String.prototype    可以为 String 对象增加新的属性。
    String.length       可以判断字符串的长度
*/

/**
 *  String.fromCharCode()
    String.fromCodePoint()
 */

/**
 *  String.fromCharCode() 通过一串 Unicode 创建字符串。
    String.fromCodePoint() 通过一串 码点 创建字符串。
    String.raw() 通过模板字符串创建字符串。
*/

/**
 * 方法
   String.raw(callSite, ...substitutions)
   String.raw`templateString`
*/

// callSite
// 一个模板字符串的“调用点对象”。类似{ raw: ['foo', 'bar', 'baz'] }
// ...substitutions
// 任意个可选的参数，表示任意个内插表达式对应的值。
// templateString
// 模板字符串，可包含占位符（${...}
// String.raw`Hi\n${2+3}!`;
// // 'Hi\n5!'，Hi 后面的字符不是换行符，\ 和 n 是两个不同的字符
// String.raw `Hi\u000A!`;             
// // "Hi\u000A!"，同上，这里得到的会是 \、u、0、0、0、A 6个字符，
// // 任何类型的转义形式都会失效，保留原样输出，不信你试试.length
// let name = "Bob";
// String.raw `Hi\n${name}!`;             
// // "Hi\nBob!"，内插表达式还可以正常运行
// // 正常情况下，你也许不需要将 String.raw() 当作函数调用。
// // 但是为了模拟 `t${0}e${1}s${2}t` 你可以这样做:
// String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
// // 注意这个测试, 传入一个 string, 和一个类似数组的对象
// // 下面这个函数和 `foo${2 + 3}bar${'Java' + 'Script'}baz` 是相等的.
// String.raw({
//   raw: ['foo', 'bar', 'baz'] 
// }, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'


// console.log(String.fromCharCode(189, 43, 190, 61))
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804))

// str.trimEnd()     // str.trimRight()     一个新字符串，表示从调用字串的末（右）端除去空白。
// 方法移除原字符串右端的连续空白符并返回，并不会直接修改原字符串本身

// String 实例
// String.prototype.constructor // 用于创造对象的原型对象的特定的函数。
// String.prototype.length // 返回了字符串的长度。
// N // 用于访问第N个位置的字符，其中N是小于 length 和 0之间的正整数。这些属性都是“只读”性质，不能编辑。
// let abc = 'asd'
// console.log(abc.length) // a
// console.log(abc[2])     // d

// String.prototype.charAt()              // 返回特定位置的字符。
// var anyString = "Brave new world";
// console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); //The character at index 0 is 'B'

// 和charAt() 类似
// String.prototype.charCodeAt()          // 返回表示给定索引的字符的Unicode的值。
// charCodeAt() 方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元 (在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。但在——例如 Unicode 编码单元 > 0x10000 的这种——不能被一个 UTF-16 编码单元单独表示的情况下，只能匹配 Unicode 代理对的第一个编码单元) 。如果你想要整个代码点的值，使用 codePointAt()。

// 什么鬼
// String.prototype.codePointAt()         // 返回使用UTF-16编码的给定位置的值的非负整数。
// console.log('ABCD'.codePointAt(1))     // 66
// console.log('ABC'.codePointAt(1))      // 66
// console.log('AB'.codePointAt(1))       // 66
// console.log('A'.codePointAt(1))        // undefined

// String.prototype.concat()              // 连接两个字符串文本，并返回一个新的字符串
// str.concat(string2, string3[, ..., stringN])

// String.prototype.includes()            // 判断一个字符串里是否包含其他字符串。   布尔值
// String.prototype.endsWith()            // 判断一个字符串的是否以给定字符串结尾，结果返回布尔值。
// String.prototype.indexOf()             // 从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。
// String.prototype.lastIndexOf()         // 从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1。

//没看 
// String.prototype.localeCompare()       // 返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同。

// String.prototype.match()               // 使用正则表达式与字符串相比较。
// str.match(regexp) regexp是一个正则表达式
// regexp一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp 。如果你没有给出任何参数并直接使用match() 方法 ，你将会得到一个包含空字符串的 Array ：[""] 。

// 没看
// String.prototype.normalize()           // 返回调用字符串值的Unicode标准化形式。
// String.prototype.padEnd()              // 在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。  // 在原字符串末尾填充指定的填充字符串直到目标长度所形成的新字符串
// String.prototype.padStart()            // 在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。  // 在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串。
//已经废弃 没看
// String.prototype.quote()               // 设置嵌入引用的引号类型。

// String.prototype.repeat()              // 返回指定重复次数的由元素组成的字符串对象。
// str.repeat(count)    // 介于0和正无穷大之间的整数 : [0, +∞) 。表示在新构造的字符串中重复了多少遍原字符串。

// String.prototype.replace()             // 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。
// 原字符串不会改变。
// var str="Visit Microsoft!"
// console.log(str.replace(/Microsoft/, "W3School"))  // Visit W3School!

// String.prototype.search()              // 对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。
// stringObject.search(regexp)   
// stringObject 中第一个与 regexp 相匹配的子串的起始位置。不全集匹配

// String.prototype.slice()               // 摘取一个字符串区域，返回一个新的字符串。
// slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。 改变原字符串   包括头尾

// String.prototype.split()               // 通过分离字符串成字串，将字符串对象分割成字符串数组。

String.prototype.startsWith()          // 判断字符串的起始位置是否匹配其他字符串中的字符。布尔值

String.prototype.substr()              // 通过指定字符数返回在指定位置开始的字符串中的字符。

String.prototype.substring()           // 返回在字符串中指定两个下标之间的字符。 包括头不包括尾

String.prototype.toLocaleLowerCase()   // 根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，toLowerCase的返回值是一致的。

String.prototype.toLocaleUpperCase()   // 根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，toUpperCase的返回值是一致的。

String.prototype.toLowerCase()         // 将字符串转换成小写并返回。
String.prototype.toSource()      //非标准            // 返回一个对象文字代表着特定的对象。你可以使用这个返回值来创建新的对象。重写Object.prototype.toSource方法。
String.prototype.toString()            // 返回用字符串表示的特定对象。重写 Object.prototype.toString 方法。 
String.prototype.toUpperCase()         // 将字符串转换成大写并返回。
String.prototype.trim()                // 从字符串的开始和结尾去除空格。参照部分 ECMAScript 5 标准。
String.prototype.trimStart()           // String.prototype.trimLeft()   // 从字符串的左侧去除空格。   
String.prototype.trimEnd()             // String.prototype.trimRight()  // 从字符串的右侧去除空格。
String.prototype.valueOf()             // 返回特定对象的原始值。重写 Object.prototype.valueOf 方法。

//没看
// String.prototype[@@iterator]()         //返回一个新的迭代器对象，该对象遍历字符串值的索引位置，将每个索引值作为字符串值返回。

// HTML wrapper methods
// 下面的方法被限制使用，因为只对可用的HTML标签和属性提供部分支持。
// String.prototype.anchor()
// String.prototype.big() 
// String.prototype.blink()
// String.prototype.bold()
// String.prototype.fixed()
// String.prototype.fontcolor()
// String.prototype.fontsize()
// String.prototype.italics()
// String.prototype.link()
// String.prototype.small() 
// String.prototype.strike()
// String.prototype.sub()
// String.prototype.sub()