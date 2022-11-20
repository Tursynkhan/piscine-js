function chunk(arr,size){
    let res=[];
    res.push(arr.slice(0,size),arr.slice(size)) 
    return res
}