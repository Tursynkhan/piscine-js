function filterKeys(obj, func) {
  let result = {};
  for (let key in obj) {
      if (func(key)) {
          result[key] = obj[key];
      }
  }
  return result;
}
function mapKeys(obj, func) {
  let result = {};
  for (let key in obj) {
      result[func(key)] = obj[key];
  }
  return result;
}
function reduceKeys(obj, func, init) {
  if (typeof init === 'undefined') {
      let acc = Object.keys(obj)[0];
      for (let key in obj) {
          if (key == acc) {
              continue;
          }
          acc = func(acc, key);
      }
      return acc;
  }
  let acc = init ;
  for (let key in obj) {
      acc = func(acc, key);
  }
  return acc;
}