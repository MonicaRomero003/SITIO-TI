function saludar(){
    alert("olA cara de b0l4");
}

function suma(){
    var valor1= 12;
    var valor2= 11;
    var resultado= valor1+valor2;
    alert("El resultado de la suma de "+valor1+"+"+valor2+" es: "+resultado)
}

function resta(){
    var valor1= 12;
    var valor2= 11;
    var resultado= valor1-valor2;
    alert("El resultado de la resta de "+valor1+"-"+valor2+" es: "+resultado)
}

function producto(){
    var valor1= 5;
    var valor2= 5;
    var resultado= valor1*valor2;
    alert("El resultado del producto de "+valor1+"*"+valor2+" es: "+resultado)
}

function dividir(){
    var valor1= 10;
    var valor2= 5;
    var resultado= valor1/valor2;
    alert("El resultado de divir "+valor1+"/"+valor2+" es: "+resultado)
}

/*funciones*/
function numero(){
    let num1=10; 
    let num2=2;
    num1 = num1 + 1; num2 = num2 + 5;
    alert ("El primer numero ahora es "+num1); 
    alert ("El segundo numero ahora es "+num2 );
}
function concatenar(){
    const a = "Hola";
    let	b = " mundo!";

    alert("Constante a contiene " + a ); 
    alert("Variable b contiene " + b ); 
    alert(a + b );
}
function ptsdeinterrupcion(){
    let a, b;
    a = 2; b = 8;
    resultado = a * b;

    alert("Variable a contiene " + a ); 
    alert("Variable b contiene " + b ); 
    alert("El producto de a por b es " + resultado );
}
function escritura(){
    let dato, resultado;

    dato = window.prompt("Introduce tu nombre", "0"); resultado = `Hola, como estas ${dato} ` ;

    alert(resultado);
}
function doble(){
let dato, num;

    dato = window.prompt("Introduce número ?", "0"); num = parseInt(dato);

    num = num *2;

    alert("El doble es " + num);
}

function suma2(){
    let dato1, dato2, num1, num2;
    dato1 = window.prompt("Introduce primer número ?", "0"); num1 = parseInt(dato1);
    dato2 = window.prompt("Introduce segundo número ?", "0"); num2 = parseInt(dato2);

    let resultado = num1 + num2;

    alert("La suma es " + resultado);
}
function inner(){
    let dato, num;

    dato = window.prompt("Introduce un número ?", "0"); num = parseInt(dato,10);

    let resultado = num *2;

    document.getElementById("salida").innerHTML = ("El doble es " + resultado);

}
function resta2(){
    let num1 = parseInt(prompt("Introduce el primer número"));
    let num2 = parseInt(prompt("Introduce el segundo número"));

    let resultado = num1 - num2;

    document.getElementById("salidaR").innerHTML = ("La resta de los números es: " + resultado);
}