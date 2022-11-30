function pick(obj,keys){
    const newObj={}
    for (let key in obj){
        for (let i=0;i<keys.length;i++){
            if (keys[i]==key){
                newObj[key]=obj[key]
            }
        }
    }
    return newObj
}
function omit(obj,keys){
    const newObj={}
    for (let key in obj){
        for (let i=0;i<keys.length;i++){
            if (keys[i]!=key){
                newObj[key]=obj[key]
            }
        }
    }
    return newObj
}
