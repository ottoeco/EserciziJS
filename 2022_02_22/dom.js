let level = 0

function myF(e) { 
console.log(level.toString() + Object.prototype.toString.call(e)); 
}

function attraversa(elem, myF) {
myF(elem) 
level++
for(let figlio of elem.children) { 
attraversa(figlio, myF)
}
level--
}

function analizza() {
let b = document.querySelector("body") 
attraversa(b, myF)
}
//collegare ad un file html

//2 spazioatore level 
analizza()