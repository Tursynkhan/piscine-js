// function split(str, separator) {
//     let result = [];
//     if (separator === "") {
//         for (let i = 0; i < str.length; i++) {
//             result.push(str[i]);
//         }
//         return result;
//     }
//     let newStr = str;
//     for (let i = 0; i < str.length; i++) {
//         newStr = newStr.replace(separator, ".")
//     }
//     let item = "";
//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[i] === ".") {
//             result.push(item);
//             item = "";
//             continue;
//         }
//         item +=newStr[i];
//     }
//     result.push(item);
//     return result;
// }
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

function split(str, elem) {
    let arr=[] 
    for (let i=0;i<str.length-elem.length+1;i++){
        if (str.slice(i,i+elem.length)==elem){
            arr.push(str.slice(0,i))
            str=str.slice(i+elem.length)
            i=0
        }
    }  
    arr.push(str)
    return arr
}