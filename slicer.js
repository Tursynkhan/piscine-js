function slice(str,start,end){
    let res=[]
    if (typeof(str)==='string'){
        res=''
    }
    if (typeof(start)==='undefined'){
        start=0
    }
    if (start<0){
        start=-start
        if (end<0){
            end=-end
            for (let i=start;i<str.length-end;i++){
                if (typeof(str)==='string'){
                    res+=str[i]
                }else{
                    res.push(str[i])
                }
                
            }
            return res
        }
        for (let i=str.length-1;i>start+1;i--){
            
            if (typeof(str)==='string'){
                res=str[i]+res
            }else{
                res.push(str[i])
                res.reverse();
            }
        }
        return res
    }else{
        if (end<0){
            end=-end
            for (let i=start;i<str.length-end;i++){
                if (typeof(str)==='string'){
                    res+=str[i]
                }else{
                    res.push(str[i])
                }
            }
            return res
        }
        for (let i=start;i<str.length;i++){
            if (i==end){
                break
            }
            if (typeof(str)==='string'){
                res+=str[i]
            }else{
                res.push(str[i])
            }
        }
        return res
    }
}

/*function slice(str, start = 0, end = str.length) {
    if (start < 0) {
        start = -start
        start = str.length - start
    }
    if (end < 0) {
        end = -end
        end = str.length - end
    }
    let res = ''
    let arr = []
    for (let i = 0; i <= str.length - 1; i++) {
        if (i >= start && i < end) {
            if (typeof str == 'string') {
                res += str[i]
            } else if (Array.isArray(str)) {
                arr.push(str[i])
            }
            console.log(str[i])
        }
    }
    if (typeof str == 'string') {
        return res
    }
    return arr
}
console.log(slice('abcdef', 0, -2))
*/
console.log(slice('abcdef', 2) );
console.log(slice('abcdef', -2));
console.log(slice('abcdef', 0, 2));
console.log(slice('abcdef', 0, -2) );
console.log(slice('abcdef', 2, 4));
console.log(slice('abcdef', -3, -1));

// handle Array
console.log(slice([1, 2, 3, 4, 5, 6], 2));
console.log(slice([1, 2, 3, 4, 5, 6], -2));
console.log(slice([1, 2, 3, 4, 5, 6], 0, 2));
console.log(slice([1, 2, 3, 4, 5, 6], 0, -2));
console.log(slice([1, 2, 3, 4, 5, 6], 2, 4));
console.log(slice([1, 2, 3, 4, 5, 6], -3, -1));