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
    let arr1=Array.from(document.getElementsByClassName('classical'))
    let arr2=Array.from(document.querySelectorAll('arr1:not(.classical)'))
    return [arr1,arr2]
}
function getActive(){
    let arr1=Array.from(document.getElementsByClassName('active'))
    let arr2=Array.from(document.querySelectorAll('arr1:not(.active)')) 
    return [arr1,arr2]
}
 
function getBonannoPisano(){
    let arr1=Array.from(document.getElementById('BonannoPisano'))
    let arr2=Array.from(document.querySelectorAll('arr1:not(#BonannoPisano))'))
    return [arr1,arr2]
}