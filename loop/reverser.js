function reverse(type){
    if (typeof type==='string'){
        let str='';
        for (let i=type.length-1;i>=0;i--){
            str+=type[i]
        }
        return str
    }
    if (typeof type==='object'){
        let arr=[];
        for (let i=type.length-1;i>=0;i--){
            arr.push(type[i])
        }
        return arr
    }
}
console.log(reverse("salut c'est cool"))