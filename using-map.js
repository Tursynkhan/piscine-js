function citiesOnly(arr){
    return arr.map((key)=>key.city)
}
function upperCasingStates(arr){
    return arr.map((key)=>key.charAt(0).toUpperCase()+key.slice(1).toLowerCase())
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
console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]))