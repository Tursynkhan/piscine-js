function getArchitects() {
    return [
        document.querySelectorAll("a"),
        document.querySelectorAll("span"),
    ];
}

function getClassical() {
    return [
        document.querySelectorAll("a.classical"),
        document.querySelectorAll("a:not(.classical)"),
    ];
}

function getActive() {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

function getBonannoPisano() {
    return [
        document.getElementById("BonannoPisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}

export { getArchitects, getClassical, getActive, getBonannoPisano };