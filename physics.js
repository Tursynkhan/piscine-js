const obj={
    f ,
    m,
    Δv,
    Δt,
    t,
    d
}
function getAcceleration(obj){
    if (obj.m<0 || obj.t<0 || obj.Δt<0){

    }
    a=obj.f/obj.m;
    a=obj.Δv/obj.Δt;
    a=(obj.d*2)/obj.t*obj.t
    return a
}