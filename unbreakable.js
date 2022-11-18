function join(arr,sep){
    let str='';
    for (let i=0;i<arr.length;i++){
        if (i==arr.length-1){
            str+=arr[i]
        }else{
            str+=arr[i]+sep
        }
    }
    return str
}
function split(str,sep){
    let arr=[]
    let buf=''
    if (str.length==0){
        let b=['']
        return b
    }
    for (let i=0;i<str.length;i++){
        if (sep.length==1){
            if (str[i]!=sep){
               buf+=str[i] 
            }else if (str[i]==sep){
                arr.push(buf)
                buf=''
            }
        }
        else if (sep.length==2){
            if (str[i]!=sep[0] && str[i]!=sep[1]){
                buf+=str[i] 
            }else if (str[i]==sep[0]&&str[i+1]==sep[1]){
                arr.push(buf)
                buf=''
            }
        }
        else if (sep.length==3){
            if (str[i]!=sep[0] && str[i]!=sep[1] && str[i]!=sep[2]){
                buf+=str[i] 
            }else if (str[i]==sep[0] && str[i+1]==sep[1] && str[i+2]==sep[2]){
                arr.push(buf)
                buf=''
            }
        }
        else if (sep==''){
            arr.push(str[i])
        }
    }
    if (buf.length>0){
        arr.push(buf)
    }
    return arr
}

console.log(split('a b c', ' '))
console.log(split('ggg - ddd - b', ' - '))
console.log(split('ee,ff,g,', ','))
console.log(split('Riad', ' '))
console.log(split('rrrr', 'rr'))
console.log(split('rrirr', 'rr'))
console.log(split('Riad', ''))
console.log(split('', 'Riad'))

