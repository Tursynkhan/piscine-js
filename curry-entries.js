function defaultCurry(obj1) {
  return function(obj2) {
      const res = {}
      let keys = Object.keys(obj1).concat(Object.keys(obj2));
      keys = [...new Set(keys)];
      for (let key of keys) {
          if (key in obj1 && key in obj2) {
              res[key] = obj2[key];
              continue;
          }
          if (key in obj1 && !(key in obj2)) {
              res[key] = obj1[key];
              continue;
          }
          res[key] = obj2[key];
      }
      return res;
  }
}
function mapCurry(func) {
  return function(obj) {
      const result = {};
      const entriesArr = Object.entries(obj);
  
      for (let entry of entriesArr) {
          const temp = func(entry);
          result[temp[0]] = temp[[1]];
      }
      return result;
  }
}
function reduceCurry(func) {
  return function(obj, init) {
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
}
function filterCurry(func) {
  return function(obj) {
      const result = {};
      const entriesArr = Object.entries(obj);
      for (let entry of entriesArr) {
      if (func(entry)) {
          result[entry[0]] = entry[1];
      } 
      }
      return result;
  }
}
function reduceScore(obj, init) {
  return reduceCurry(function(accum, [k,v]) {
      if (v["isForceUser"] && (typeof accum === "number")) {
          return v["shootingScore"] + v["pilotingScore"] + accum;
      }
      return accum;
  })(obj, init)
}
function filterForce(obj) {
  return filterCurry(([k,v]) => {
      if (v["isForceUser"] && v["shootingScore"] >= 80) {
          return true;
      }
      return false;
  })(obj)
}
function mapAverage(obj){
  return mapCurry(([k,v])=> {
      let avg = (v["pilotingScore"] + v["shootingScore"]) / 2;
      v["averageScore"] = avg;
      return [k, v];
  })(obj)
}
