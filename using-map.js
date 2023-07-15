const citiesOnly=(arr)=>{
   return arr.map(x=>x.city)
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

const fahrenheitToCelsius=(arr)=>{
    return arr.map((val)=>{
        const el=val.split('°F')
        const cel=((el[0]-32)*5)/9
        return (Math.round(cel)+'°F')
    })
}

const trimTemp=(arr)=>{
    return arr.map(obj=>{
        return {
            city:obj.city,
            temperature:obj.temperature.replace(/\s/g, ''),
        }
    })
}

function tempForecasts(arr){
    const str=arr.map((all)=>{
        let temp=Math.floor(((parseInt(all.temperature)-32)*5)/9)+'°Celsius';
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

