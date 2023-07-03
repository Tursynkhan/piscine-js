
export { build,destroy,repair }

function build(n){
    let count=1
    let body=document.getElementsByTagName('body')[0]
    let interval=setInterval(()=>{
        let div =document.createElement("div")
        div.setAttribute("id","brick-"+count)
        count%3==2 ? (div.dataset.foundation=true):null
        body.appendChild(div)
        count++
        if(count>n){
            clearInterval(interval)
        }
    },100)
}

function repair(...ids) {
    ids.forEach((id) => {
        let brick = document.getElementById(id);
        brick.getAttribute("foundation")
            ? (brick.dataset.repaired = "in progress")
            : (brick.dataset.repaired = true);
    });
}

function destroy(){
    let element=document.getElementsByTagName('div')
    element[element.length-1].remove()
}
// export function repair(...ids) {
//     for (let i = 0; i < ids.length; i++) {
//         let elem = document.getElementById(ids[i])
//         // console.log(elem.getAttribute("foundation"))
//         let n = ids[i].replace('brick-', '')
//         if(n%3===2){
//             elem.setAttribute('data-repaired',"in progress")
//             elem.innerHTML = n
//         }else{
//             elem.setAttribute("data-repaired","true")
//             elem.innerHTML = n
//         }
//         // console.log(Number(ids[i]))
//     }
// }
