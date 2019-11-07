import { object } from "prop-types";
// 只能适用于对象和数组
function cloneDeep4(source, hash = new WeakMap()) {
    if (!isObject(source)) return source; 
    if (hash.has(source)) return hash.get(source);
      
    let target = Array.isArray(source) ? [] : {};
    hash.set(source, target);
    
  	Reflect.ownKeys(source).forEach(key => { // 改动
        if (isObject(source[key])) {
            target[key] = cloneDeep4(source[key], hash); 
        } else {
            target[key] = source[key];
        }  
  	});
    return target;
}

let bbb = new object()
let aaa = {
    a: 1,
    b: 2,
}
console.log(bbb.get(aaa))