
function getAcceleration(obj){
    if (typeof(obj.Δv)==='number' && typeof(obj.Δt)==='number') {
        return obj.Δv/obj.Δt;
    }else if (obj.f==='number' && obj.m==='number'){
        return obj.f/obj.m
    }else if (obj.t==='number' && obj.d==='number'){

        return a=(obj.d*2)/obj.t*obj.t
    }
    return "impossible"
}
