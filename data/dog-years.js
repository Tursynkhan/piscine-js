function dogYears(name,age){
    let dogAge;
    let second=31557600;
    let merc=0.2408467;
    let ven=0.615197726;
    let mars=1.8808158;
    let jupiter=11.862615;
    let saturn =29.447498;
    let uranus=84.016846;
    let neptune=164.79132;
    switch(name){
        case 'earth':
            dogAge=age*7/second;
            return Math.round(dogAge*100)/100;
            break;
        case 'mercury':
            dogAge=(age*7/second)/merc;
            return Math.round(dogAge*100)/100;
            break;
        case 'venus':
            dogAge=(age*7/second)/ven;
            return Math.round(dogAge*100)/100;
            break;
        case 'mars':
            dogAge=(age*7/second)/mars;
            return Math.round(dogAge*100)/100;
            break;
        case 'jupiter':
            dogAge=(age*7/second)/jupiter;
            return Math.round(dogAge*100)/100;
            break;
        case 'saturn':
            dogAge=(age*7/second)/saturn;
            return Math.round(dogAge*100)/100;
            break;
        case 'uranus':
            dogAge=(age*7/second)/uranus;
            return Math.round(dogAge*100)/100;
            break;
        case 'neptune':
            dogAge=(age*7/second)/neptune;
            return Math.round(dogAge*100)/100;
            break;
        default:
            break;
    }
}
console.log(dogYears('mercury', 2134835688))