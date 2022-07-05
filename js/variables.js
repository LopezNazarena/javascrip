// alert("Bienvenidos");

document.write("<h1>Hello word</h1>");

document.write(3 + 5);

// // punto 4
// let usuario = prompt("Hola ¿cual es tu nombre?");
// document.write("<p>Hola </p>" + usuario);

// // punto 5
// let numero1= prompt("Escribe un numero")
// let numero2= prompt("Escribe nuevamente un numero")
// document.write("La suma es: "+ (parseInt(numero1) + parseInt(numero2)))

// // punto 6
// let numero3= prompt("Escribe un numero")
// let numero4= prompt("Escribe nuevamente un numero")
// if(numero3 > numero4) document.write("El primer numero es el mayor numero ingresado: " + numero3);
// else if(numero4 > numero3){
//  document.write("El segundo numero es el mayor, numero ingresado " + numero4);
// } 

// // punto 7
// let numero5= prompt("Escribe un numero")
// let numero6= prompt("Escribe nuevamente un numero")
// let numero7= prompt("Escribe un ultimo numero")
// if(numero5 > numero6 && numero5 > numero7) document.write("El primer numero es el mayor numero ingresado: " + numero5);
// else if(numero6 > numero5 && numero6 > numero7){
//  document.write("El segundo numero es el mayor, numero ingresado " + numero6);
// } else if(numero7 > numero6 && numero7 > numero5) {
//     document.write("El tercer numero es el mayor, el numero es " + numero7);
// }

// punto 8
let numero= prompt("Introduzca un numero")
if(numero % 2 === 0){
document.write("El numero es divisible en 2 ")
} else{
    document.write("El numero no es divisible por 2")
}
