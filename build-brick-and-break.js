export function build(number){
    let i=1;
    let counter=2;
    let interval = setInterval(() => {
        let div=document.createElement("div")
        document.body.append(div)
        div.innerHTML=i
        div.id="brick-"+i
        i++
        if (counter==3){
            div.dataset.foundation=true
            counter=0
        }
        counter++
        if (number+1 === i) {
            clearInterval(interval)
        }
    }, 100,i);
}


export function repair(...ids) {
    for (let i=0;i<ids.length;i++){
    }
}

export function destroy() {

}
