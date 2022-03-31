console.log('lezione 5 - OOP -TIPI- PROTOTIPI');
//prima versione (old) è
function utente(nome,cognome)
{
  let u = Object.create(utente.methods)
  u.nome = nome
  u.cognome = cognome
  return u 
}
utente.methods = { 
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
    toString() { return "Utente: " + this.nome +" "+ this.cognome }
}

let u2= new Utente2("Joseph",'Renzi')
console.log(u2.toString());