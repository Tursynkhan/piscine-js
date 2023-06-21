function pyramid(str, int) {
    let res = ''
    for (let i = 1; i <= int; i++) {
        res += ' '.repeat(int - i).repeat(str.length)
        res += str.repeat(i * 2 - 1)
        if (i === int) {
            return res
        }
        res += '\n'
    }

    return res
}
console.log(pyramid('{}', 12))

// const pyramid=(sep,n)=>{
//     let res=''
//     for (let i=1;i<=n;i++){
//         for(let j=1;j<=n-1+i;j++){
//             if(j>n-i){
//                 res+=sep
//             }else if(sep.length==3){
//                 res+='   '
//             }else if (sep.length==2){
//                 res+='  '
//             }else if (sep.length==1){
//                 res+=' '
//             }
//         }
//         res+='\n'
//     }
//     return res.slice(0,res.length-1)
// }
