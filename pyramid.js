const pyramid=(sep,n)=>{
    let res=''
    for (let i=1;i<=n;i++){
        for(let j=1;j<=n-1+i;j++){
            if(j>n-i ){
                res+=sep
            }else{
                res+=' '
            }
        }
        res+='\n'
    }
    return res.slice(0,res.length-1)
}

console.log(pyramid('a',5))