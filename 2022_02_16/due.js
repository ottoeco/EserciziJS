console.log('lezione 2');
/*
let a=['table','thead','tbody','tfoot','tr','td']
let tipiH={}
for (const e of a) {
    let eH=document.createElement(e)
    tipiH[e]=Object.getOwnPropertyNames(eH)
}
console.log(JSON.stringify(tipiH));
*/
// ESE2
let b=document.getElementsByTagName('ul')[0]
//alert(b.childNodes[0])
//console.log(b.childNodes)
let cp=b.firstChild
cp=cp.nextSibling
cp=cp.nextSibling
//console.log(cp)
//rimuovo il 3
let r=b.removeChild(cp)
b.appendChild(r)
let a=[]
a.inde
/*
let mp2=document.getElementById('2')
let mp4=document.getElementById('4')
let testo2=mp2.textContent
let testo4=mp4.textContent
    mp4.textContent=testo2
    mp2.textContent=testo4
//let fp=mp.previousSibling()
//let suc=mp.nextSibling;*/

//ES.3 lavorare con l'albero del DOM
function naviga(id){
    let e=document.getElementsByTagName(id)
    let a=e.childNodes;
    let c=0;
    let r=null;
    for (let e of a){
        if (e.nodeType == 1){
            c++;
            if (c==3){
                r=e.removeChild(e)
            }
        }
    }
    e.appendChild(r)
}
//ES.4
function sortAlfa(){

}
//Array ha il sort, mentre object NO
function sortAlfabetico() {
    let body = document.getElementsByTagName('body')[0];
    let a = body.childNodes;
    let b = {};
    let c = [];
    for (let e of a) {
    if (e.nodeType == 1) {
    b[e.innerHTML] = e;
    c.push(e.innerHTML);
    body.removeChild(e);
    }
    }
    c.sort();
    for (let k of c) {
    body.appendChild(b[k]);
    }
    // alert(JSON.stringify(b));
    // alert(b['prima riga']);
    } 
    //Math.atan2() con gli angoli