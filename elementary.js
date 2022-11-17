function multiply(a,b){
    let flag=false
    if (a<0 && b<0){
        a=String(a)
        a=Number(a.slice(1))
        b=String(b)
        b=Number(b.slice(1))
    }
    if (a<0 ){
        a=String(a)
        a=Number(a.slice(1))
        flag=true
    }else if(b<0){
        b=String(b)
        b=Number(b.slice(1))
        flag=true
    }
    let res=0
    for (let i=0;i<b;i++){
        res+=a
    }
    if (flag){
        res=Number('-'+res)
    }
    return res
}
function divide(a,b){
    let count=0;
    if (a>b){
        let r=a;
        while(r>=b){
            r=r-b;
            count++
        }
    }else{
       return 0
    }
    return count;
}
function modulo(a,b){
    if (a>b){
        while(b<a){
            a=a-b
        }
        return a
    }else{
        while(a<b){
            b=b-a
        }
        return b
    }
   
}