function filterShortStateName(arr){
    const result=arr.filter(word=>word.length<7)
    return result
}
function filterStartVowel(arr){
    function vowel(word){
        let vowel=['e','y','u','i','o','a','E','Y','U','I','O','A']
        for (let i=0;i<vowel.length;i++){
            if (vowel[i]==word[0]){
                return word
            }
        }
    };
    return arr.filter(vowel)
}
function filter5Vowels(arr){
    const result=arr.filter(word=>{
        let count=0;
        let vowels=['a','A','e','E','o','O','i','I','u','U','y','Y'];
        for (let  i=0;i<word.length;i++){
                for (let j=0;j<vowels.length;j++){
                if (word[i]==vowels[j]){
                    count++
                    break
                }
            }
        }
        if (count>=5){
            return word
        }
    });
    return result
}
function filter1DistinctVowel(arr){
        const  result=arr.filter(word=>{
        let count=0
        let vowels=['a','A','e','E','o','O','i','I','u','U','y','Y']
        for (let j=0;j<vowels.length;j++){
            for (let  i=0;i<word.length;i++){
                if (word[i]==vowels[j]){
                    if (j%2==0){
                        j=j+1
                    }
                    count++
                    break
                }
            }
        }
        if (count==1){
            return word
        }
    });
    return result
}
function multiFilter(arr){
    let result=arr.filter(word=>{
        
        let flagCapital = false 
        let flagName = false
        let flagTag = false
        let flagRegion = false
        if(word.capital.length>=8){
            flagCapital = true
        }
        let vowels=['a','A','e','E','o','O','i','I','u','U','y','Y']
        let name=word.name
        for (let i=0;i<vowels.length;i++){
            if (name[0]===vowels[i]){
                flagName = true
            }
        }
        let tag=word.tag
        let count=0;
        for (let  i=0;i<tag.length;i++){
                for (let j=0;j<vowels.length;j++){
                if (tag[i]==vowels[j]){
                    count++
                    break
                }
            }
        }
        if (count==1){
            flagTag=true
        }
        if (word.region!="South"){
            flagRegion=true
        }
        if (flagCapital && flagName===false && flagTag && flagRegion){
            return word
        } 
    });
    return result
}
