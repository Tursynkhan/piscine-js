function addWeek(date){
    let day0 = new Date('0001-01-01');
    let aDay=1000*3600*24;
    let dif=date-day0;
    let day=dif/aDay;
    let remainder=day%14;
    let week=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','secondMonday','secondTuesday','secondWednesday','secondThursday','secondFriday','secondSaturday','secondSunday'];
    return week[remainder];
}
function timeTravel({date,hour,minute,second}){
   date.setHours(hour)
   date.setMinutes(minute)
   date.setSeconds(second)
   return date
}