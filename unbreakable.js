function split(str, separator) {
    let result = [];
    if (separator === "") {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    let newStr = str;
    for (let i = 0; i < str.length; i++) {
        newStr = newStr.replace(separator, ".")
    }
    let item = "";
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === ".") {
            result.push(item);
            item = "";
            continue;
        }
        item +=newStr[i];
    }
    result.push(item);
    return result;
}
function join(arr, elem) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (i==arr.length-1){
            res+=arr[i]
        }else{
            res+=arr[i]+elem
        }
    }
    return res
}
console.log((split('rrrr', 'rr')))