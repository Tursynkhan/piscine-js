function citiesOnly(arr){
    return arr.map((key)=>key.city)
}
function upperCasingStates(arr){
    let array = cities.map(function city (currentValue){
        const regex = /^\w/g
        const regexSpace = /\s\w/g
        const regexSp = new RegExp(regexSpace)
        const regexSt = new RegExp(regex)
        let res1 = currentValue.match(regexSt)
        let res2 = currentValue.match(regexSp)
        let res = currentValue.replace(regexSt,res1[0].toUpperCase())
        if(res2!== null){
            res = res.replace(regexSp,res2[0].toUpperCase())
        }
            return res
        })
        return array
}
function fahrenheitToCelsius(arr){
    return arr.map(key=>Math.round(((parseInt(key)-32)*5)/9)+'°C')
}
function trimTemp(arr) {
    const temp = arr.map((key) =>{
        key.temperature=key.temperature.trim();
        return key;
    });
    return temp
}

function tempForecasts(arr){
    const str=arr.map((all)=>{
        let temp=Math.round(((parseInt(all.temperature)-32)*5)/9)+'°Celsius';
        let city=all.city;
        let state=all.state.charAt(0).toUpperCase()+all.state.slice(1).toLowerCase()
        return temp+' in '+city+', '+state
    });
    return str
}
