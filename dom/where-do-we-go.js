import {places} from "./where-do-we-go.data.js";
export function explore() {
    const arrCord = [];
    const arrCord2 = [];
    let i = 0;
    for (let place of places) {
        const tempArr = place.coordinates.split(" ")
        arrCord.push({ index: i ,coord:tempArr[0]});
        i++;
    }
    const digits = /\d*/g;
    const forComparison = [];
    for (let c of arrCord) {
        const degree = c.coord.match(digits);
        // from coord to decimal degrees
        let dmsToDD = parseFloat(degree[0]) + (parseFloat(degree[2]) / 60) + ( parseFloat(degree[4] +"." + degree[6]) /3600);
        
        if (c.coord.includes("S")) {
            dmsToDD = dmsToDD * -1;
        }
        c.coord = dmsToDD;
        forComparison.push(dmsToDD);
    }
    forComparison.sort( function(a,b) {
        return b - a;
    });
    const sortedPlaces = []
    for (let dd of forComparison) {
        for (let c of arrCord) {
            if (dd === c.coord) {
                sortedPlaces.push(places[c.index])
                break;
            }
        }
    }
    for (let place of sortedPlaces) {
        const sect = document.createElement("section");
        let nameOfFile = place.name.toLowerCase();
        nameOfFile = nameOfFile.split(",")[0];
        if (nameOfFile.includes(" ")) {
            nameOfFile = nameOfFile.split(" ").join("-");
        }
        sect.style.background = "center / cover no-repeat url(./where-do-we-go_images/" + nameOfFile + ".jpg)"
        document.body.append(sect);
    }
    const loc = document.createElement("a");
    loc.classList.add("location");
    document.body.append(loc);
    loc.textContent = sortedPlaces[0].name + "\n" + sortedPlaces[0].coordinates;
    loc.style.color = sortedPlaces[0].color;
    const coorForLink = sortedPlaces[0].coordinates.match(/\d*\w?/g)
    const result = coorForLink.filter( el => { return el !== ""})
    loc.setAttribute("href", `'google.com/maps 63°39'47.7"N 17°47'57.9"W`);
    loc.setAttribute("target", "_blank")
    document.addEventListener("scroll", (ev) => {
        const max = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight,  document.documentElement.scrollHeight,  document.documentElement.offsetHeight)
        const forScrolling = [];
        // console.log(window.innerHeight);
        // console.log(window.pageYOffset);
        let temp = 0;
        let low = window.innerHeight / 2;
        let high;
        while (temp < max) {
            high = low + window.innerHeight;
            forScrolling.push({low1: low, high1: high});
            temp += window.innerHeight;
            low = high;
        }
        let y = window.pageYOffset
        loc.textContent = sortedPlaces[0].name + "\n" + sortedPlaces[0].coordinates;
        const digitsAndLet = /\d*\w?/g;
        for (let i = 0; i < forScrolling.length; i++) {
            if (forScrolling[i].low1 < y && y < forScrolling[i].high1) {
                loc.textContent = sortedPlaces[i+ 1].name + "\n" + sortedPlaces[i + 1].coordinates;
                loc.style.color = sortedPlaces[i + 1].color;
                const coorForLink = sortedPlaces[i+1].coordinates.match(digitsAndLet)
                const result = coorForLink.filter( el => { return el !== ""})
                console.log(result);
                loc.setAttribute("href", `'google.com/maps${result[0]}%C2%B0${result[1]}%27${result[2]}.${result[3]}%22${result[4]}%20${result[5]}%C2%B0${result[6]}%27${result[7]}.${result[8]}%22${result[9]}`);
                loc.setAttribute("target", "_blank")
                break;
            } else {
                loc.textContent = sortedPlaces[0].name + "\n" + sortedPlaces[0].coordinates;
                loc.style.color = sortedPlaces[0].color;
                const coorForLink = sortedPlaces[0].coordinates.match(digitsAndLet)
                const result = coorForLink.filter( el => { return el !== ""})
                loc.setAttribute("href", `google.com/maps63°39'47.7"N 17°47'57.9"W`);
                loc.setAttribute("target", "_blank")
            }
        }
        
    })
    const compas = document.createElement("div");
    compas.classList.add("direction");
    compas.textContent = "N"
    document.body.append(compas);
    // let scrollableElement = document.body; //document.getElementById('scrollableElement');
    // scrollableElement.addEventListener('wheel', checkScrollDirection);
    // function checkScrollDirection(event) {
    // if (checkScrollDirectionIsUp(event)) {
    //     compas.textContent = "N"
    // } else {
    //     compas.textContent = "S"
    // }
    // }
    // function checkScrollDirectionIsUp(event) {
    //     if (event.wheelDelta) {
    //       return event.wheelDelta > 0;
    //     }
    //     return event.deltaY < 0;
    // }
    var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
    compas.textContent = "S"
   } else {
    compas.textContent = "N"
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
}