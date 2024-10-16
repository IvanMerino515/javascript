function sayHello (){
let nombre = 'ivan';
let hola ='hola';
console.log (hola, nombre);
}

sayHello();

function calculateSquareArea (){
    let ladoCuadrado = 12;
    console.log (ladoCuadrado * ladoCuadrado)
    }

calculateSquareArea ();


function calculateTriangleArea (){
    let base = 12;
    let altura = 24;
    console.log (base * altura / 2)

}

calculateTriangleArea ()

function calculateCircleArea (){
    const pi = 3.14;
    let radio = 340;
    console.log (pi * radio * radio)

}

calculateCircleArea ();


function celsiusToFahrenheit (){
  let celsius = 30;
  const convert = celsius * 1.8 + 32;
  console.log (convert);
}

celsiusToFahrenheit ()

function fahrenheitToCelsius (){
   let fahrenheit = 86;
   const convertF = (fahrenheit - 32) /1.8;
   console.log (convertF);
}

fahrenheitToCelsius ()

function totalPrice (){
    let price = 30;
    const iva = 1.21;
    console.log (price * iva)

}

totalPrice()

function writeMessage (){
    const name = 'Juan';
    const material = 'bolis';
    const size = 2;
    console.log (name + ' quiere coger unos ' + material +' del tamaño '+ size)
}
    
writeMessage ()
