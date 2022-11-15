
is.num=function (n){

    return typeof(n)==='number'
}
is.nan=function(n){
    if (Number.isNaN(n)){
        return true
    }
    return false
}
is.str=function (str){
    if (typeof(str)==='string'){
        return true
    }
    return false
}
is.bool=function(bool){
    if (typeof(bool)==='boolean'){
        return true
    }
    return false
}
is.undef=function (undef){
    if (typeof(undef)==='undefined'){
        return true
    }
    return false
}
is.def=function (def){
    if (typeof(def)!=='undefined'){
        return true
    }
    return false
}
is.arr=function (arr){
    return arr instanceof Array
   
}
is.obj=function (obj){
    if (typeof(obj)==='object'){
        return true
    }
    return false
}
is.fun=function (f){
    if (typeof(f)==='function'){
        return true
    }
    return false
}
is.truthy=function (truthy){
    if (truthy===true){
        return true
    }
    return false
}
is.falsy=function (falsy){
    if (falsy===false){
        return false
    }
    return true
}
