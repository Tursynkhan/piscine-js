function slice(str,start,end){
    if (typeof(str)==='string'){
        let resStr=''
        if (typeof(start)==='undefined'){
            start=0
        }
        if (start<0){
            start=-start
             if (end<0){
                end=-end
                for (let i=start;i<str.length-end;i++){
                    resStr+=str[i]
                }
                return resStr
            }
            for (let i=str.length-1;i>start+1;i--){
                resStr=str[i]+resStr
            
            }
            return resStr
        }else{
            if (end<0){
                end=-end
                for (let i=start;i<str.length-end;i++){
                    resStr+=str[i]
                }
                return resStr
            }
            for (let i=start;i<str.length;i++){
                if (i==end){
                    break
                }
                resStr+=str[i]
            }
            return resStr
        }
    }
    if (typeof(str)==='object'){

        let resArr=[]
        if (typeof(start)==='undefined'){
            start=0
        }
        if (start<0){
            start=-start
            if (end<0){
                end=-end
                for (let i=start;i<str.length-end;i++){
                    resArr.push(str[i])
                }
                return resArr
            }
            for (let i=str.length-1;i>start+1;i--){
                resArr.push(str[i]);
                resArr.reverse();
            }
            return resArr
        }else{
            if (end<0){
                end=-end
                for (let i=start;i<str.length-end;i++){
                    resArr.push(str[i])
                }
                return resArr
            }
            for (let i=start;i<str.length;i++){
                if (i==end){
                    break
                }
                resArr.push(str[i])
            }
            return resArr
        }
    }
}

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