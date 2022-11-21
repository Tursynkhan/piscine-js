function isValid(d){
    if(isNaN(d)|| date == 0){
        return false
    }else{
        return true
    }
}
function isAfter(date1,date2){
    let d1=date1.getTime()
    let d2=date2.getTime()
    if (d1>d2){
        return true
    }else{
        return false
    }
}
function isBefore(date1,date2){
    let d1=date1.getTime()
    let d2=date2.getTime()
    if (d1<d2){
        return true
    }else{
        return false
    }
}
function isFuture(date){
    let dateNow=Date.now()
    if (date>dateNow){
        return true
    }else{
        return false
    }
}
function isPast(date){
    let dateNow=Date.now()
    if (date<dateNow){
        return true
    }else{
        return false
    }
}
console.log(isValid(Date.now()))