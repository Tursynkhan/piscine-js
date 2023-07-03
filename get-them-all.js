export const getArchitects = () => {
    let Architects=document.getElementsByTagName("a")
    let Architects2=document.getElementsByTagName('span')
    return [Object.values(Architects),Object.values(Architects2)]
}
export const getClassical = () => {
    let arr1=Array.from(document.querySelectorAll('.classical'))
    let arr2=Array.from(document.querySelectorAll(':not(.classical)'))
    return [arr1,arr2]
}
export const getActive = () => {
    let arr1=Array.from(document.getElementsByClassName('active'))
    let arr2=Array.from(document.querySelectorAll(':not(.active)')) 
    return [arr1,arr2]
}
export const getBonannoPisano = () => {
    let arr = []
    let res = document.getElementById("BonannoPisano")
    let res1 = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'))
    arr.push(res)
    arr.push(res1)
    return arr
}
