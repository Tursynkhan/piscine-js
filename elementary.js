function multiply(a,b){
    let res=0
    for (let i=0;i<b;i++){
        res+=a
    }
    return res
}
function divide(a,b){
    let count=0;
    let r=a;
    while(r>=b){
        r=r-b;
        count++
    }
    return count;
}
function modulo(a,b){
    while(b<a){
        a=a-b
    }
    return a
}