const get=(src,path)=>{
    let arrPath=path.split('.')
    let res
    for (const prop of arrPath){
        if (res){
            res=res[prop]
        } else{
            res=src[prop]
        }     
    }
    return res
}
const src1={ key: 'value' }
const src={nested:{key:'peekaboo'}}
const path='nested.key'

console.log(get(src,path))
