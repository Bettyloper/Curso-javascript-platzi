//Cuadrado

console.group ("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetroC = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es de: " + perimetroC + "cm");
}
function areaCuadrado(lado) {
    return lado * lado;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const areaC = areaCuadrado(value);
    alert("El área del cuadrdado es: " + areaC + "cm^2");
}
console.groupEnd();

// Triangulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;

} 
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("inputTriangulo2");
    const valueLado2 = Number(inputLado2.value);

    const inputBase = document.getElementById("inputTriangulo3");
    const valueBase = Number(inputBase.value);

    const perimetroT = perimetroTriangulo(valueLado1, valueLado2, valueBase);

alert("El perimetro del triángulo es : " + perimetroT + "cm");
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTriangulo3");
    const inputAltura = document.getElementById("inputTriangulo4");
        const valueBase = inputBase.value;
        const valueAltura = inputAltura.value;

        const areaT = areaTriangulo(valueBase, valueAltura);
        alert("El área es: " + areaT + "cm^2");
}


// Círculos

function diametro(radio){
    return radio * 2;
} 
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametros = diametro(radio);
    return diametros * PI;
} 
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetroCr = perimetroCirculo(value);
    alert(" El perimetro del círculo es de: " + perimetroCr + "cm");
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const areaCr = areaCirculo(value);
    alert("El área del círculo es de: " + areaCr + "cm^2");
}