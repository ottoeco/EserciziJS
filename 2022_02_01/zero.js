//prima lezione
let variabile; //dichiarazione di una variabile
//gli array sono 0-based
let a=[2,3,5,7,11,[13,17]];
console.log(a.length);
let b=a[5];
console.log(b);
let c=a[3];
console.log(c);
let d=a[5][1];
console.log(d);
let libro={
    titolo:"Elementi di JS",
    prezzo:49.90
}
//stampa dentro all'oggetto
console.log(libro['titolo']);
console.log(libro['prezzo']);
//costrutto dei linguaggi ogg.messaggio
/*
libro.titolo
libro.prezzo 
*/
console.log(libro.gommone);
libro['gommone']='Good Morning!';
console.log(libro.gommone);
//libro.length //non esiste per gli ogg (solo per gli Array)
let p=[
{
    x:0.0,
    y:4.0
},
{
    x:3.0,
    y:0.0
}
];
//var d distanza ta 2 punti
let distanza=Math.sqrt(
    ((p[0].x-p[1].x)**2)+
    ((p[0].y-p[1].y)**2)
);
//Operatori
//+,-,*,/
// cont++
let cont;
cont+=2;
//controllo stretto
let x,y;
x === y
x !== y
let r=5,t=2;
let h=(r===t)||(r!==t);
console.log(h);//true
//h=falseORtrue
/*
NaN valore atipico
a=Nan;
a!=a;
*/
let n=0;
console.log(n/=n); //->NaN
console.log(5/0);
Math.abs(5/0);//valore Assoluto
Number.POSITIVE_INFINITY+Number.NEGATIVE_INFINITY;
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE/2);
//ES6
console.log(Number.isNaN(n));
Number.isInteger(n);
Number.isFinite(55);
console.log(Number.EPSILON);
//document.querySelector("#clocktext").textContent="provo a fissare il contenuto di un paragrafo";
