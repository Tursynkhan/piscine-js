function citiesOnly(arr){
    return arr.map((key)=>key.city)
}
function upperCasingStates(arr){
    const temp=arr.map(key=>{
        const arr2=key.split(" ");
        for (let i=0;i<arr2.length;i++){
            arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
        }
        const str2=arr2.join(" ");
        return str2
    });
    return temp
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
        const arr2=all.state.split(" ");
        for (let i=0;i<arr2.length;i++){
            arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
        }
        const state=arr2.join(" ");
        return temp+' in '+city+', '+state
    });
    return str
}
