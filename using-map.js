const citiesOnly=(arr)=>{
   return arr.map(x=>x.city)
}
const upperCasingStates=(arr)=>{
   return arr.map(val=>val.charAt(0).toUpperCase()+val.slice(1))
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

const tempForecasts=(arr)=>{
    return arr.map(obj=>{
        const celcius=Math.round((parseInt(obj.temperature)-32)*5/9);
        return `${celcius}°Celsius in ${obj.city}, California`
    })
}
const formattedForecasts = tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]);
  console.log(formattedForecasts); 