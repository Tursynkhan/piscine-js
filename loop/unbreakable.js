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

// function split(str,sep){
//     let arr=[]
//     let buf=''
//     if (str.length==0){
//         let b=['']
//         return b
//     }
//     for (let i=0;i<str.length;i++){
//         if (sep.length==1){
//             if (str[i]!=sep){
//                buf+=str[i] 
//             }else if (str[i]==sep){
//                 arr.push(buf)
//                 buf=''
//             }
//         }
//         else if (sep.length==2){
//             if (str[i]!=sep[0] && str[i]!=sep[1]){
//                 buf+=str[i] 
//             }else if (str[i]==sep[0]&&str[i+1]==sep[1]){
//                 arr.push(buf)
//                 buf=''
//             }
//         }
//         else if (sep.length==3){
//             if (str[i]!=sep[0] && str[i]!=sep[1] && str[i]!=sep[2]){
//                 buf+=str[i] 
//             }else if (str[i]==sep[0] && str[i+1]==sep[1] && str[i+2]==sep[2]){
//                 arr.push(buf)
//                 buf=''
//             }
//         }
//         else if (sep==''){
//             arr.push(str[i])
//         }
//     }
//     if (buf.length>0){
//         arr.push(buf)
//     }
//     return arr
// }