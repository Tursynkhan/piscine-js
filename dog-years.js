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
            return dogAge.toFixed(2);
            break;
        case 'mercury':
            dogAge=age*merc*7/second;
            return dogAge.toFixed(2);
            break;
        case 'venus':
            dogAge=age*ven*7/second;
            return dogAge.toFixed(2);
            break;
        case 'mars':
            dogAge=age*mars*7/second;
            return dogAge.toFixed(2);
            break;
        case 'jupiter':
            dogAge=age*jupiter*7/second;
            return dogAge.toFixed(2);
            break;
        case 'saturn':
            dogAge=age*saturn*7/second;
            return dogAge.toFixed(2);
            break;
        case 'uranus':
            dogAge=age*uranus*7/second;
            return dogAge.toFixed(2);
            break;
        case 'neptune':
            dogAge=age*neptune*7/second;
            return dogAge.toFixed(2);
            break;
        default:
            break;
    }
}