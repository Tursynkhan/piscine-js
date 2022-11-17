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
            for (let i=str.length-1;i>start;i--){
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
            for (let i=str.length-1;i>start;i--){
                resArr.push(str[i]);
                resArr.reverse();
            }
            return resArr
        }else{
            if (end<0){
                end=-end
                for (let i=start;i<str.length-end-1;i++){
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

