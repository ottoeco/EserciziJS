console.log('lezione 5 - OOP -TIPI- PROTOTIPI');
//prima versione (old) è
function utente(nome,cognome)
{
  let u = Object.create(utente.metodi)
  u.nome = nome
  u.cognome = cognome
  return u 
}
utente.metodi =
{ 
    //toString() { return "Utente: " + this.nome +" "+ this.cognome }
    toString1: function(){},
    toString2: ()=>{
        return this.nome
    },
    hello: () => { return "Hello World!";},
    hello2(){return "Hello 2!"}
};
//proviamo l'esempio
let u1 = utente("Joseph",'Renzi')
//console.log(u1.toString2())
//console.log(u1)
console.log(u1.hello2());

/*due*/
function Utente2(nome,cognome)
{
  this.nome = nome
  this.cognome = cognome
}
Utente2.prototype={
    toString() { return "Utente2: " + this.nome +" "+ this.cognome }
}

let u2= new Utente2("Joseph",'Renzi')
console.log(u2.toString());

/*tre 
metodi dentro, NO virgole*/

class Utente3{
    constructor(nome,cognome){
        this.nome = nome
        this.cognome = cognome
    }
    toString() { return "Utente3: " + this.nome +" "+ this.cognome }
}

let u3= new Utente3("Joseph",'Renzi')
console.log(u3.toString());

/* 9.4 */

/* ABBIAMO MODIFICATO AL VOLO LA CLASSE aggiungendo un metodo 
e lui le aggiorna su tutto le istanze attuali, su tutte le classi,
anche quelle dichiarate in precedenza*/

Utente2.prototype.spiegami=()=>{ return "Utente2: messaggio per tutti" }

//ES6
class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length-1]; }
}
let v=new EZArray();
v.push(1)

/*
https://www.tiobe.com/tiobe-index/
https://pypl.github.io/PYPL.html

ES 2017- modifica delle Promise
async ->davanti alla funzione da richiamare
await ->aspetta la chiamata delle async
    punti di attesa, per la fetch
*/