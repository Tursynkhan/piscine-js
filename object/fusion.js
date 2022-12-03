function fusion(obj1, obj2) {
  let result = {};
  let longestObj;
  const length1 = Object.keys(obj1).length;
  const length2 = Object.keys(obj2).length;
  if (length1 >= length2) {
      longestObj = obj1;
  } else {
      longestObj = obj2;
  }
  for (let key in longestObj) {
      switch (true) {
          case (arr(obj1[key]) && arr(obj2[key])):
              result[key] = obj1[key].concat(obj2[key]);
              break;
          case (str(obj1[key]) && str(obj2[key])):
              result[key] = `${obj1[key]} ${obj2[key]}`;
              break;
          case (num(obj1[key]) && num(obj2[key])):
              result[key] = obj1[key] + obj2[key];
              break;
          case (obj(obj1[key]) && obj(obj2[key])):
              result[key] = fusion(obj1[key], obj2[key]);
              break;
          default:
             if (key in obj2) {
              result[key] = obj2[key];
             }else {
              result[key] = obj1[key];
             }
      }
  }
  return result;
}
const arr = function (el){
  return Array.isArray(el);
}
const obj = function (el){
  return typeof el === "object" && el !== null && !Array.isArray(el);
}
const str = function (el){
  return typeof el === "string";
}
const num = function (el){
  return typeof el === "number";
}