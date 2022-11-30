function invert(obj){
    const swapped=Object.entries(obj).map(
        ([key,value])=>[value,key]
    );
    return Object.fromEntries(swapped)
}