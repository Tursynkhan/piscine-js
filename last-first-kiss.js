function first(arr){
    return arr[0]
}
function last(arr){
    return arr[arr.length-1]
}
function kiss(arr){
    let arr2 =[]
    arr2.push(arr[arr.length-1])
    arr2.push(arr[0])
    return arr2
}