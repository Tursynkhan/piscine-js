

function arrToSet(arr){
    return new Set(arr)
}
function arrToStr(arr){
    let str2=''
    for (let i=0;i<arr.length;i++){
        str2+=arr[i]
    }
    return str2
}

function setToArr(set){
    let arr2=[]
    for (let value of set){
        arr2.push(value)
    }
    return arr2
}
function setToStr(set){
    let str=''
    for (let value of set){
        str+=value
    }
    return str
}
function strToArr(str){
    return str.split("")
}
function strToSet(str){
    let set2= new Set();
    for (let i=0;i<str.length;i++){
        set2.add(str[i])
    }
    return set2
}

function mapToObj(map){
    return Object.fromEntries(map)
}
function objToArr(obj){
    return Object.values(obj)
}
function objToMap(obj){
    return new Map(Object.entries(obj))
}

function arrToObj(arr){
    return Object.assign({},arr)
}
function strToObj(str){
    return Object.assign({},str.split(''))
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
