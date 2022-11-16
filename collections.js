const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

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
    return new Set(arr)
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
    return Object.entries(obj)
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
    else if (typeof(type)===null){
        return 'null'
    }
}
