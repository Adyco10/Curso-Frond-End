//CONDICIONALES
//debugger; // nos ayuda inspeccionar el codigo paso a paso 

let edad = +prompt(`ingrese su edad`);

let peso = +prompt("cuanto pesas (Kgs.)");
let altura =+prompt (`ingrese su estatura`);
let indiceMasaCorporal = 0;
//let peso = +prompt("cuanto pesas (Kgs.)");
//let rpta = edad > 17;
// comparadores aritmeticos
// > mayor
// < menor
// < = menor igual
// > = mayor igual
// !== diferente
// === igual
// Comparadores logicos
// Y : &&
// O :||
// not : !

indiceMasaCorporal = peso/ (altura * altura);

if (edad > 17 && indiceMasaCorporal <= 30 ) {
   
     console.log(`si hay pase laboral`);
     
  }
  

 else {
  console.log(`no hay pase laboral #quedate en casa`);
  
}

console.log( `Su indice de masa coroporal  (IMC) es ${indiceMasaCorporal}`);
console.log( "fin del programa, hasta pronto");