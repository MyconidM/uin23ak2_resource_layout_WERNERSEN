//https://stackoverflow.com/questions/45037753/dynamic-html-navigation-bar-from-array
function skriveUtNav() {
    let navBar = ''
    for (let i = 0; i< resources.length; i++){
        navBar += `<span id="nav${i}" onclick="innhold(${i})">${resources[i].category}</span>`
    }
    document.getElementById("nav").innerHTML = navBar
}

skriveUtNav()
function innhold(arrNr) {
    skriveUtNav()
    document.getElementById("text").innerHTML = `<h2>${resources[arrNr].category}</h2><p>${resources[arrNr].text}</p>`
    let sourceList = ''
    for (let i = 0; i< resources[arrNr].sources.length; i++){
        sourceList += `<li><a href="${resources[arrNr].sources[i].url}">${resources[arrNr].sources[i].title}</a></li>`
    }
    document.getElementById("links").innerHTML = sourceList
    document.getElementById("nav"+arrNr).classList.add("active")
        
}