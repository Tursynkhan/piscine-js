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
    for (let i = 0; i < ids.length; i++) {
        let elem = document.getElementById(ids[i])
        // console.log(elem.getAttribute("foundation"))
        let n = ids[i].replace('brick-', '')
        if(n%3===2){
            elem.setAttribute('data-repaired',"in progress")
            elem.innerHTML = n
        }else{
            elem.setAttribute("data-repaired","true")
            elem.innerHTML = n
        }
        // console.log(Number(ids[i]))
    }
}

export function destroy() {
    let elements=document.querySelectorAll('div[id^="brick"]')
    elements[elements.length-1].remove()
}
