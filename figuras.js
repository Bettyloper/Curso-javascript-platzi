// Código del cuadrado
//console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es de: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;

}
//console.log("El área del cuadrado es de: " + areaCuadrado + "cm^2");

//console.groupEnd();

//Código del triángulo
// console.group("Triángulos");

// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
//     "Los lados del triángulo miden:" 
//     + ladoTriangulo + "cm, " 
//     + ladoTriangulo2 + "cm, " 
//     + baseTriangulo + "cm"
// );
//const alturaTriangulo =5.5;
//console.log("La altura del Triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;

} 
//console.log("El perímetro del Triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
// = (baseTriangulo * alturaTriangulo) / 2 ;
// console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");


//Código del circulo

//const radio = 4;

function diametro(radio){
    return radio * 2;
} 
//= radio * 2;
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametros = diametro(radio);
    return diametros * PI;
} 
//= diametro * PI;
function areaCirculo(radio){
    return (radio * radio) * PI;

}
// = (radio * radio) * PI;

// console.log("El radio del círculo es de: " + radio + "cm");
// console.log("El diametro del círculo es de: " + diametro + "cm");
// console.log("El perimetro del círculo es de: " + perimetroCirculo + "cm");
// console.log("El área del círculo es de: " + areaCirculo + "cm^2");

