function filterValues(obj, func) {
  let result = {};
  for (let key in obj) {
      if (func(obj[key])) {
          result[key] = obj[key];
      }
  }
  return result;
}

function mapValues(obj, func) {
  let result = {};
  for (let key in obj) {
      result[key] = func(obj[key]);
  }
  return result;
}

function reduceValues(obj, func, init = 0) {
  let acc = init;
  for (let key in obj) {
      acc = func(acc, obj[key]);
  }
  return acc
}