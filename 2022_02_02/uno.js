console.log('---Lezione Uno---');
/*
'\n'-> 0a terminatore di riga LF
'\n'-> 0d0a su windows CRLF
' ' -> 20 Spazio
hexdump -c prova.txt singoli byte
// 2f-/ 2a-*
JS è caseSensitive-> True != true
inizia sempre con una lettera a,$,_,(no numerico)
parole riservate 40 circa
delete variabile
*/
"use strict"; //MODE del compiler
//Change HTML Content-Attribute-Style
document.getElementById("demo").innerHTML = "Hello JavaScript";
{/* <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button> */}
document.getElementById("demo1").style.fontSize = "35px";
//cambio le proprieta
document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.display = "block";
//tag
{/* external script
<script>
//document.getElementById("demo").innerHTML = "My First JavaScript";
</script> */}
/*display
Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log()
*/
document.getElementById("demo1").innerHTML = 5 + 6;
//For testing purposes, it is convenient to use document.write()
//cancella tutto
window.alert('Welcome TEST');
//For debugging purposes, you can call the console.log() method in the browser to display data.
console.log(5 + 6);
//A JavaScript program is a list of programming statements.
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 7;          // Statement 3
z = x + y;      // Statement 4
console.log(z)
//Values, Operators, Expressions, Keywords, and Comments.
// How to create variables:
var x;
let y;
// How to use variables:
x = 5.5;
y = 6;
let z = x + y;
let s="John Doe", s1='John Doe';
//variables are used to store data values.
//keywords var, let and const to declare variables.
//(5 + 6) * 10
//Lower Camel Case:
/*
4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing*/
let carName;//technically it is undefined
let person = "John Doe", carName = "Volvo", price = 200;
let person = "John Doe",
carName = "Volvo",
price = 200;
/*
The let keyword was introduced in ES6 (2015).
Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope.
notazione  esponenziale 1.0e9
esponente+mantissa fino a 2^53 che è la mantissa del 64b 
{
  let x = 2;
}
// x can NOT be used here
*/
Math.pow(2,53);
Math.round();
Math.ceil()
Math.floor()
Math.abs()
Math.max()
Math.random()
//2*Math.random()-1;
(max-min)*Math.random+min;
Math.PI
Math.sqrt()
Math.pow(3,1/3);
Math.log(1000) ///b10 /math-ln10
Math.exp(3) = Math.E  **3
//ES6
Math.cbrt();//radice cubica
Math.hypot//ipotenusa
Math.clz32()//zero sulla mantissa
//Aritmetica non genera errori
//+- infinity
//no  divisione per  0
//JavaScript has dynamic types.
//This means that the same variable can be used to hold different data types:
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
//The typeof operator returns the type of a variable or an expression
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof 0
let car;    // Value is undefined, type is undefined
//The values are written as name:value pairs (name and value separated by a colon).
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
objectName.propertyName
objectName["propertyName"]
person.lastName;
person["lastName"];
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  objectName.methodName()
//   name = person.fullName();
//procedura
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
//funzione
let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
myFunction();//risultato
myFunction;//obj della funz
/*
Eventi HMTL
Here is a list of some common HTML events:

Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page
\',\",\\ -escape char \
*/

let x = "John";
let y = new String("John");
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);//anche -
let part = str.substring(7, 13);//solo +
//let part = str.substr(7, 6);
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let t3=text1.toLocaleLowerCase();
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
