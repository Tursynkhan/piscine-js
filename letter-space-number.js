const letterSpaceNumber=(str)=>{
    let result =str.match(/[a-zA-Z]\s\d/g);
    return result
}
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
