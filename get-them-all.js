export {
    getBonannoPisano,
    getActive,
    getArchitects,
    getClassical,
  }

function getArchitects(){

    let arr1 = Array.from(document.getElementsByTagName("a"))
    let arr2 = Array.from(document.getElementsByTagName('span'))
    return [arr1,arr2]

}
  
function getClassical(){
    let arr1=Array.from(document.querySelectorAll('.classical'))
    let arr2=Array.from(document.querySelectorAll(':not(.classical)'))
    return [arr1,arr2]
}
function getActive(){
    let arr1=Array.from(document.getElementsByClassName('active'))
    let arr2=Array.from(document.querySelectorAll(':not(.active)')) 
    return [arr1,arr2]
}
 
function getBonannoPisano(){
   let arr = []
    let res = document.getElementById("BonannoPisano")
    let res1 = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'))
    arr.push(res)
    arr.push(res1)
    return arr
}