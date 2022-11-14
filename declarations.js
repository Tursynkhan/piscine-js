const escapeStr="\`\\\/\"\'"
const arr=[4,'2']
const obj={
    str:"Hello",
    num:1,
    bool:true,
    undef:undefined,
}
const nested ={
    arr:[4,undefined,'2'],
    obj:{
        str:"hi",
        num:1,
        bool:true,
    }
}
function deepFreeze(object) {
    const propNames = Object.getOwnPropertyNames(object);
  
  
    for (const name of propNames) {
      const value = object[name];
  
      if (value && typeof value === "object") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
  }
  
Object.freeze(obj);
Object.freeze(arr);
deepFreeze(nested)