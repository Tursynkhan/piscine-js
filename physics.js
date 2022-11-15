const obj={
    f ,
    m,
    Δv,
    Δt,
    t,
    d
}
function getAcceleration(obj){
    if (obj.Δv==='undefined' && obj.j==='undefined' && obj.d==='undefined' && obj.t==='undefined') {
        return a=obj.f/obj.m;
    }else if (obj.f==='undefined' & obj.m==='undefined' && obj.d==='undefined' && obj.t==='undefined'){
        return a=obj.Δv/obj.Δt;
    }else if (obj.f==='undefined' || obj.m==='undefined' && obj.Δv==='undefined' && obj.j==='undefined'){

        return a=(obj.d*2)/obj.t*obj.t
    }
    return "impossible"
}