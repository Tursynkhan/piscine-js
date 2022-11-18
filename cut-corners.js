function round(n){
    let flag=false;
    if (n<0){
        n=-n
        flag=true
    }
    n=n*10
    if (modulo(n)>=5 && modulo(n)<=9){
        n=(n-modulo(n))/10
        n=n+1
    }else if(modulo(n)>=0 && modulo(n)<=4){
        n=(n-modulo(n))/10
    }
    if (flag){
        n=-n
    }
    return n
}
function floor(n){
    let flag=false;
    if (n<0){
        n=-n
        flag=true
    }
    n=n*10
    if (modulo(n)>=0 && modulo(n)<=9){
        n=(n-modulo(n))/10
        n=n+1
    }
    if (flag){
        n=-n
    }
    return n
}
function ceil(n){
    let flag=false;
    if (n<0){
        n=-n
        flag=true
    }
    n=n*10
    if (modulo(n)>=0 && modulo(n)<=9){
        n=(n-modulo(n))/10
    }
    if (flag){
        n=-n
    }
    return n
}
function trunc(n){
    let flag=false;
    if (n<0){
        n=-n
        flag=true
    }
    n=n*10
    if (modulo(n)>=0 && modulo(n)<=9){
        n=(n-modulo(n))/10
    }
    if (flag){
        n=-n
    }
    return n

}
function modulo(a,b){
    let flag=false
    b=10
    if (a<0 && b<0){
        a=-a
        b=-b
        flag=true
    }
    if (a<0 ){
        a=-a
        flag=true
    }else if(b<0){
        b=-b
    }
    
    while(b<a){
          a=a-b
    }
    if (!flag){
       return a
    }
    if (flag){
        return a=Number('-'+a)
    }
}