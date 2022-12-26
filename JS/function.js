/**console.log("Hola Mundo");

let numero1 = 3;
let numero2 = 4;

let resultado = numero1+numero2;

console.log("La suma de numero1 y numero2 es: "+ resultado);
*/

document.getElementById("boton").onclick = function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Probando nuestro primer evento en JS";

    const cartelito = "KE KPA QUE ZOYYY PAPAAAA B-)"
    console.log("Puse un cartelito y apareceeeeee! Me vuelvo lokaaaa");
window.alert(cartelito)
} 

document.addEventListener("click", function () {
    console.log("registrando clicks")
    document.getElementById("demo").innerHTML = "Probando nuestro primer evento en JS";
})


document.getElementById("boton").addEventListener("click", function () {
    console.log("registrando clicks")
    document.getElementById("boton").innerHTML = "Probando nuestro primer evento en JS";
})

document.getElementById("botonColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "#FF0000";
})
  
document.getElementById("botonDefault").addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
})

document.getElementById("botonOcultar").addEventListener("click", function () {
    document.getElementById("demo").style.display = "none";
})

const collection = document.getElementsByClassName("prueba");
for (let i=0;1< collection.length; i++) {
    collection[i].style.backgroundColor="yellow";
}