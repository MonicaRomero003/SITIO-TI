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

    document.write(`Variable a contiene ${a} <br> ` );
    document.write(`Variable b contiene ${b} <br> ` ); 
    document.write(`El producto de a por b es ${resultado} `);

}