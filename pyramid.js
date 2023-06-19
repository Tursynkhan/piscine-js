const pyramid=(sep,n)=>{
    res=''
    for (let i=1;i<=n;i++){
        for(let j=1;j<=n*2-1;j++){
            if(j>n-i && j<=n-1+i){
                res+=sep
            }else{
                res+=' '
            }
        }
        res+='\n'
    }
    return res.slice(0,res.length-1)
}

console.log(pyramid('+',10))