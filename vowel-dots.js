const letterSpaceNumber=(str)=>{
    const regex = /[a-zA-Z]\s(\d)(?!\d|\w)/g;
    const matches = str.match(regex);
    return matches ? matches : [];
}
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
