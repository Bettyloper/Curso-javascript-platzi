// Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es de: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es de: " + areaCuadrado + "cm^2");

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triángulo miden:" 
    + ladoTriangulo + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
);

const alturaTriangulo =5.5;
console.log("La altura del Triángulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del Triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;
console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del circulo
console.group("Círculos");

const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
const perimetroCirculo = diametro * PI;
const areaCirculo = (radio * radio) * PI;

console.log("El radio del círculo es de: " + radio + "cm");
console.log("El diametro del círculo es de: " + diametro + "cm");
console.log("El perimetro del círculo es de: " + perimetroCirculo + "cm");
console.log("El área del círculo es de: " + areaCirculo + "cm^2");

console.groupEnd();