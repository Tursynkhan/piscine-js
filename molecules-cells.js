function RNA(str){
    let res=''
    if (str.length==0){
        return res
    }
    for(let i=0;i<str.length;i++){
        if (str[i]=='G'){
            res+='C'
        }else if (str[i]=='C'){
            res+='G'
        }else if(str[i]=='T'){
            res+='A'
        }else if(str[i]=='A'){
            res+='U'
        }else{

            res+=str[i]
        }
    }
    return res
}
function DNA(str){
    let res=''
    if (str.length==0){
        return res
    }
    for(let i=0;i<str.length;i++){
        if (str[i]=='C'){
            res+='G'
        }else if (str[i]=='G'){
            res+='C'
        }else if(str[i]=='A'){
            res+='T'
        }else if(str[i]=='U'){
            res+='A'
        }else{

            res+=str[i]
        }
    }
    return res
}
console.log(DNA('AUCG'))