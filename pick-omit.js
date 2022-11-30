function pick(obj,keys){
    const newObj={}
    for (let key in obj){
        if (keys==key){
            newObj[key]=obj[key]
        }
    }
    return newObj
}
function omit(obj,keys){
    const newObj={}
    for (let key in obj){
        if (keys!=key){
            newObj[key]=obj[key]
        }
    }
    return newObj
}