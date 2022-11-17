function cutFirst(str){
    let   res=''
    for (let i=2;i<str.length;i++){
        res+=str[i]
    }
    return res
}
function cutLast(str){
    let res=''
    for(let i=str.length-3;i>=0;i--){
        res=str[i]+res
    }
    return res
}
function cutFirstLast(str){
    let res=''
    n=str.length
    for (let i=2;i<n-2;i++){
        res+=str[i]
    }
    return res
}
function keepFirst(str){
    let res=''
    for (let i=0;i<str.length;i++){
        if (i==2){
            break
        }
        res+=str[i]
    }
    return res
}
function keepLast(str){
    let res=''
    
    if (str.length==1){
        return str
    }
    for (let i=str.length-1;i>str.length-3;i--){
        
        res=str[i]+res
    }
    return res
}
function keepFirstLast(str){
    let res1=''
    let res2=''
    let res=''
    
   if (str.length>3){
    for (let i=0;i<str.length;i++){
        if (i==2){
            break
        }
        res1+=str[i]
    }
    for (let i=str.length-1;i>str.length-3;i--){
        
        res2=str[i]+res2
    }
    res=res1+res2
   }else{
    return str
   }
   return  res
}
console.log(cutFirstLast('abcdef'))