function indexOf(arr,index,begin){
    if (typeof(begin)==='undefined'){
        begin = 0
    }
    for (let i=begin;i<arr.length;i++){
        if (index==arr[i]){
            return i
        }
    }
    return -1
}
function lastIndexOf(arr,elem,begin){
    if (typeof(begin)==='undefined'){
        begin = arr.length-1
    }
    for(let i=begin;i>=0;i--){
        if (elem==arr[i]){
            return i
        }
    }
    return -1
}

function includes(arr,element){
    for (let i=0;i<arr.length;i++){
        if (element==arr[i]){
            return true
        }
    }
    return false
}
