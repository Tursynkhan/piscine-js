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
    
    if (type===null){
        return 'null'
    }
    if (typeof(type)==='undefined'){
        return 'undefined'
    }
    if(typeof(type) === 'object'){
        if (Array.isArray(type)){
            return 'Array'
        }
        if (type instanceof Map){
            return "Map"
        }
        if (type instanceof Set){
            return "Set"
        }
        return 'Object'
    }
    if(typeof(type)){
        const s=typeof(type)
        return s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()
    }

}

