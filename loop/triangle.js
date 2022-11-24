function triangle(str,n){
    let res=''
    for (let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            res+=str
        }
        res+='\n'
    }
    return res.slice(0,res.length-1)
}
console.log(triangle('*',5))