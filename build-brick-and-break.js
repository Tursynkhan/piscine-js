export function build(number){
    let i=1;
    let interval = setInterval(() => {
        let div=document.createElement("div")
        document.body.append(div)
        div.innerHTML=i
        div.id="brick-"+i
        i++
        if (number === i) {
            clearInterval(interval)
        }
    }, 100);
}


export function repair() {

}

export function destroy() {}
