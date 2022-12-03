function filterEntries(obj, func) {
  const result = {};
  const entriesArr = Object.entries(obj);
  for (let entry of entriesArr) {
     if (func(entry)) {
      result[entry[0]] = entry[1];
     } 
  }
  return result;
}
function mapEntries(obj, func) {
  const result = {};
  const entriesArr = Object.entries(obj);
  for (let entry of entriesArr) {
      const temp = func(entry);
      result[temp[0]] = temp[[1]];
  }
  return result;
} 
function reduceEntries(obj, func, init) {
  const entriesArr = Object.entries(obj);
  if (typeof init === "undefined") {
      let acc = entriesArr[0][0];
      for (let entry of entriesArr) {
          if (entry[0] == acc) {
              continue
          }
          acc = func(acc, entry);
      }
      return acc;
  }
  let acc = init;
  for (let entry of entriesArr) {
      acc = func(acc, entry);
  }
  return acc;
}
function lowCarbs(obj) {
  const result =  filterEntries(obj, ([k,v]) => {
      return  ((v /100) * nutritionDB[k]["carbs"]) < 50;  
  })
  return result;
}
function totalCalories(obj) {
  const result = reduceEntries(obj, (acc, [k,v]) => {
      return nutritionDB[k]["calories"] * v/100 + acc
  }, 0)
  return Math.round(result * 10) / 10;
}
function cartTotal(obj) {
  const result  = mapEntries(obj, ([k,v]) => {
      let res = {}
      for (let key in nutritionDB[k]) {
          res[key] = Math.round(nutritionDB[k][key] * v/100 *1000) / 1000
      }
      return [k,res]
  })
  return result;
}