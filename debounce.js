const debounce = (func,delay)=>{
    let timeout=null
    return (...args)=>{
        if (timeout!==null){
            clearTimeout(timeout)
            timeout=null
        }
        timeout=setTimeout(()=>{
            func(...args)
        },delay)
    }
}
const opDebounce=(func,delay,options)=>{
    const leading =(options,leading) ? true : false
    let timeout=null
    let cooldown=false
    return (...args)=>{
        if (leading){
            if(timeout!==null){
                clearTimeout(timeout)
                timeout=null
            }
            timeout=setTimeout(()=>{
                cooldown=false
            },delay)
            if (cooldown) return 
            func(...args)
            cooldown=true
        }else{
            if(timeout!==null){
                clearTimeout(timeout)
                timeout=null
            }
            timeout=setTimeout(()=>{
                func(...args)
            },delay)
        }
    }
}