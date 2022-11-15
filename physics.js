
function getAcceleration(obj){
    if (typeof(obj.Δv)==='number' && typeof(obj.Δt)==='number') {
        return obj.Δv/obj.Δt;
    }else if (typeof(obj.f)==='number' && typeof(obj.m)==='number'){
        return obj.f/obj.m
    }else if (typeof(obj.t)==='number' && typeof(obj.d)==='number'){

        return (obj.d*2)/obj.t*obj.t
    }
    return "impossible"
}
