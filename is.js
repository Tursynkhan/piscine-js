
function num(n){
    if (typeof(n)==='number'){
        return true
    }
    return false
    
}
function nan(n){
    if (Number.isNaN(n)){
        return true
    }
    return false
}
function str(str){
    if (typeof(str)==='string'){
        return true
    }
    return false
}
function bool(bool){
    if (typeof(bool)==='boolean'){
        return true
    }
    return false
}
function undef(undef){
    if (typeof(undef)==='undefined'){
        return true
    }
    return false
}
function def(def){
    if (typeof(def)!=='undefined'){
        return true
    }
    return false
}
function arr(arr){
    if (typeof(arr)==='object'){
        return true
    }
    return false
}
function obj(obj){
    if (typeof(obj)==='object'){
        return true
    }
    return false
}
function fun(f){
    if (typeof(f)==='function'){
        return true
    }
    return false
}
function truthy(truthy){
    if (truthy===true){
        return true
    }
    return false
}
function falsy(falsy){
    if (falsy===false){
        return false
    }
    return true
}
// test #1 failed:
// (_) => match(_, is.num, [0, NaN])

// TypeError: undefined is not a function