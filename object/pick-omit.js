function pick(obj,keys){
    const newObj={}
    for (let key in obj){
        if (typeof(keys)==='string'){
            if (keys==key){
                newObj[key]=obj[key]
            }
        }else if(typeof(keys)==='object'){
            for (let i=0;i<keys.length;i++){
                if (keys[i]==key){
                    newObj[key]=obj[key]
                }
            }
        }
    }
    return newObj
}
function omit(obj,keys){
    const newObj={}
    for (let key in obj){
        if (obj.hasOwnProperty(key)){

            if (typeof(keys)==='string'){
                if (key!==keys){
                    newObj[key]=obj[key]
                }
            }else if(typeof(keys)==='object'){
                if(!(keys.includes(key))){
                    newObj[key]=obj[key]
                }
            }
        }
    }
    return newObj
}
console.log(omit({ something: 5, __proto__: { d: 6 } }, ['proto', 'something']))