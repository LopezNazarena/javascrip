alert("Bienvenidos");

document.write("<h1>Hello word</h1>");

document.write(3 + 5);

// punto 4
let usuario = prompt("Hola ¿cual es tu nombre?");
document.write("<p>Hola </p>" + usuario);

// punto 5
let numero1= prompt("Escribe un numero")
let numero2= prompt("Escribe nuevamente un numero")
document.write("La suma es: "+ (parseInt(numero1) + parseInt(numero2)))

// punto 6
let numero3= prompt("Escribe un numero")
let numero4= prompt("Escribe nuevamente un numero")
if(numero3 > numero4) document.write("El primer numero es el mayor numero ingresado: " + numero3);
else if(numero4 > numero3){
 document.write("El segundo numero es el mayor, numero ingresado " + numero4);
}

// punto 7
let numero5= prompt("Escribe un numero")
let numero6= prompt("Escribe nuevamente un numero")
let numero7= prompt("Escribe un ultimo numero")
if(numero5 > numero6 && numero5 > numero7) document.write("El primer numero es el mayor numero ingresado: " + numero5);
else if(numero6 > numero5 && numero6 > numero7){
 document.write("El segundo numero es el mayor, numero ingresado " + numero6);
} else if(numero7 > numero6 && numero7 > numero5) {
    document.write("El tercer numero es el mayor, el numero es " + numero7);
}

// punto 8
let numerO= prompt("Introduzca un numero")
if(numerO % 2 === 0){
document.write("El numero es divisible en 2 ")
} else{
    document.write("El numero no es divisible por 2")
}

// punto 9
let frase = prompt("Ingrese una frase")
console.log(frase.toLowerCase())
frase = frase.toLowerCase()


if(frase.charAt(0) === "a" || frase.charAt(0) ==="e" || frase.charAt(0) === "i" ||frase.charAt(0) ==="o" || frase.charAt(0) === "u"){
    document.write(frase.charAt(0))
}

if(frase.charAt(1) === "a" || frase.charAt(1) ==="e" || frase.charAt(1) === "i" ||frase.charAt(1) ==="o" || frase.charAt(1) === "u"){
    document.write(frase.charAt(1))
}

if(frase.charAt(2) === "a" || frase.charAt(2) ==="e" || frase.charAt(2) === "i" ||frase.charAt(2) ==="o" || frase.charAt(2) === "u"){
    document.write(frase.charAt(2))
}

if(frase.charAt(3) === "a" || frase.charAt(3) ==="e" || frase.charAt(3) === "i" ||frase.charAt(3) ==="o" || frase.charAt(3) === "u"){
    document.write(frase.charAt(3))
}

if(frase.charAt(4) === "a" || frase.charAt(4) ==="e" || frase.charAt(4) === "i" ||frase.charAt(4) ==="o" || frase.charAt(4) === "u"){
    document.write(frase.charAt(4))
}

if(frase.charAt(5) === "a" || frase.charAt(5) ==="e" || frase.charAt(5) === "i" ||frase.charAt(5) ==="o" || frase.charAt(5) === "u"){
    document.write(frase.charAt(5))
}

if(frase.charAt(4) === "a" || frase.charAt(6) ==="e" || frase.charAt(6) === "i" ||frase.charAt(6) ==="o" || frase.charAt(6) === "u"){
    document.write(frase.charAt(6))
}

if(frase.charAt(4) === "a" || frase.charAt(7) ==="e" || frase.charAt(7) === "i" ||frase.charAt(7) ==="o" || frase.charAt(7) === "u"){
    document.write(frase.charAt(7))
}

if(frase.charAt(4) === "a" || frase.charAt(8) ==="e" || frase.charAt(8) === "i" ||frase.charAt(8) ==="o" || frase.charAt(8) === "u"){
    document.write(frase.charAt(8))
}

if(frase.charAt(4) === "a" || frase.charAt(9) ==="e" || frase.charAt(9) === "i" ||frase.charAt(9) ==="o" || frase.charAt(9) === "u"){
    document.write(frase.charAt(9))
}

if(frase.charAt(4) === "a" || frase.charAt(10) ==="e" || frase.charAt(10) === "i" ||frase.charAt(10) ==="o" || frase.charAt(10) === "u"){
    document.write(frase.charAt(10))
}




// // punto 10
let numero= prompt("Introduzca un numero")
if(numero % 2 === 0){
document.write("El numero es divisible en 2")
} else if (numero % 3 === 0) {
    document.write("El numero es divisible por 3");
}  else if (numero % 5 === 0) {
    document.write("El numero es divisible por 5");
}  else if (numero % 7 === 0) {
    document.write("El numero es divisible por 7");
}


// punto 11
let numero0 = prompt("Introduzca un numero");
if (numero0 % 2 === 0) {
  document.write("El numero es divisible en 2");
}
if (numero0 % 3 === 0) {
  document.write("El numero es divisible por 3");
}
if (numero0 % 5 === 0) {
  document.write("El numero es divisible por 5");
}
if (numero0 % 7 === 0) {
  document.write("El numero es divisible por 7");
}
