function indexOf(arr,index){
    for (let i=0;i<arr.length;i++){
        if (index==arr[i]){
            return i
        }
    }
    return -1
}
function lastIndexOf(arr,elem){
    for(let i=arr.length-1;i>=0;i--){
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
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))