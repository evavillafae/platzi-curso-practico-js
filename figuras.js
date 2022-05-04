//CUADRADO
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");



//PERÍMETRO
function perimetroCuadrado (lado){
    return lado * 4;
} perimetroCuadrado (lado)

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");



//ÁREA
function areaCuadrado (lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();


//-------------------------------------------


//TRIÁNGULO
console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triángulo miden: "+ ladoTriangulo1+ "cm, " +  ladoTriangulo2 + "cm y " + baseTriangulo + "cm");
//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");



//PERÍMETRO
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");



//ÁREA
function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");



//TRIÁNGULO ISÓSCELES

function alturaTrianguloIsosceles(lado1, lado2, base){
    if (lado1 === lado2 && lado1 != base) {
        resultado = (Math.pow(lado1, 2) - Math.pow(base,2)/4);
        altura = Math.sqrt(resultado);
        return (altura)
    } else{
        return ("Tu Triángulo no es Isósceles, verifica que dos de sus lados tengan exactamente longitudes iguales y su base sea de una longitud diferente.")
    }
} alturaTrianguloIsosceles (5,5,3)


console.groupEnd();



//-------------------------------------------


//CÍRCULO
console.group("Círculos");
//const radioCirculo = 4;
//console.log("El radio del círculo mide: " + radioCirculo + "cm");
//console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");
//const PI = Math.PI;
//console.log("Pi es igual a " + PI);



//DIÁMETRO
function diametroCirculo(radio){
    return radio * 2;
}



//PERÍMETRO
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}
//console.log("La circunferencia mide: " + perimetroCirculo + " cm");



//ÁREA
function areaCirculo(radio){
    return (radio * radio) * Math.PI
}
//console.log("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();


//-------------------------------------------


//RECTÁNGULO

console.group("Rectángulos");



//PERÍMETRO
function perimetroRectangulo(base, altura){
    return (2 * base) + (2 * altura)
}



//ÁREA
function areaRectangulo(base, altura){
    return base * altura
}



console.groupEnd();

//-------------------------------------------



//Interacción con HTML


//CUADRADO


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value =  input.value;
    const perimetro = perimetroCuadrado (value);
    document.getElementById("resultado-p-cuadrado-aqui").innerHTML= "Perímetro<br>" + perimetro + " cm";
}



function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value =  input.value;
    const area = areaCuadrado (value);
    document.getElementById("resultado-a-cuadrado-aqui").innerHTML= "Área<br>" + area + " cm<sup>2</sup>";
}


//TRIÁNGULO
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const value1 =  parseInt(inputLado1.value);
    const value2 =  parseInt(inputLado2.value);
    const value3 =  parseInt(inputBase.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    document.getElementById("resultado-p-triangulo-aqui").innerHTML= "Perímetro<br>" + perimetro + " cm";
}



function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const inputBase = document.getElementById("InputTrianguloBase");
    const value1 =  parseInt(inputAltura.value);
    const value2 =  parseInt(inputBase.value);
    const area = areaTriangulo (value1, value2);
    document.getElementById("resultado-a-triangulo-aqui").innerHTML= "Área<br>" + area + " cm<sup>2</sup>";
}


function calcularAlturaIsosceles(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
        const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const value1 = parseInt(inputLado1.value);
    const value2 = parseInt(inputLado2.value);
    const value3 = parseInt(inputBase.value);
    const altura = alturaTrianguloIsosceles (value1, value2, value3);
    document.getElementById("resultado-h-triangulo-aqui").innerHTML= "Altura de<br>tu Isósceles<br>" + altura.toFixed(2) + " cm";
}

//CÍRCULO
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculoRadio");
    const value =  input.value;
    const perimetro = perimetroCirculo (value);
    document.getElementById("resultado-p-circulo-aqui").innerHTML= "Perímetro<br>" + perimetro.toFixed(2) + " cm";
}



function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculoRadio");
    const value =  input.value;
    const area = areaCirculo (value);
    document.getElementById("resultado-a-circulo-aqui").innerHTML= "Área<br>" + area.toFixed(2) + " cm<sup>2</sup>";
}


//RECTÁNGULO
function calcularPerimetroRectangulo(){
    const inputLado1 = document.getElementById("InputRectanguloLado1");
    const inputLado2 = document.getElementById("InputRectanguloLado2");
    const value1 =  inputLado1.value;
    const value2 =  inputLado2.value;
    const perimetro = perimetroRectangulo (value1, value2);
    document.getElementById("resultado-p-rectangulo-aqui").innerHTML= "Perímetro<br>" + perimetro + " cm";
}


function calcularAreaRectangulo(){
    const inputLado1 = document.getElementById("InputRectanguloLado1");
    const inputLado2 = document.getElementById("InputRectanguloLado2");
    const value1 =  inputLado1.value;
    const value2 =  inputLado2.value;
    const area = areaRectangulo (value1, value2);
    document.getElementById("resultado-a-rectangulo-aqui").innerHTML= "Área<br>" + area + " cm<sup>2</sup>";
}
