function arrToSet(arr){
    const set= new Set(arr)
    return set 
}

function arrToStr(arr){
    return arr.join('')
}
function setToArr(set){    
    return Array.from(set)
}
function setToStr(set){
    const str=Array.from(set).join('')
    return str
}
function strToArr(str){
    const arr= str.split('')
    return arr
}
function strToSet(str){
    const arr=str.split('')
    return new Set(arr)
}
function mapToObj(map){
    return Object.fromEntries(map)
}
function objToMap(obj){
    const map=new Map(Object.entries(obj))
    return map
}
function objToArr(obj){
    return Object.values(obj)
}
function arrToObj(arr){
    return Object.assign({},arr)
}
function strToObj(str){ 
    const arr=str.split('')
    return Object.assign({},arr)
}
function superTypeOf(type){
    if(Object.getPrototypeOf(type)===Map.prototype){
        return 'Map'
    }
    else if (Object.getPrototypeOf(type)===Set.prototype){
        return 'Set'
    }
    else if (typeof(type)==='string'){
        return 'String'
    }
    else if (typeof(type)=== 'object' && !Array.isArray(type) && typeof(type) !== null){
        return 'Object'
    }
    else if (typeof(type)==='number'){
        return 'Number'
    }
    else if (typeof(type)===NaN){
        return 'Number'
    }
    else if (Array.isArray(type)){
        return 'Array'
    }
    else if (typeof(type)==='undefined'){
        return 'Undefined'
    }
    else if (typeof(type)==='function'){
        return 'Function'
    }
    else if (!type){
        return 'null'
    }  
}