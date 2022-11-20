function get(src, path){
    let arrPath=path.split('.')
    let res
    for (let i = 0; i < arrPath.length; i++){
        if ( res ){
            res = res[arrPath[i]]
        }else{
            res = src[arrPath[i]]
        }
    }
    console.log(res)
}
// const get = (src, path) => {
//     let pathArr = path.split('.')
//     let cur = src
//     pathArr.forEach((element) => {
//         if (cur === undefined) return cur
//         cur = cur[element]
//     })
//     return cur
// }
get({nested:{ key: {another: 'value'} }}, 'nested.key.another')