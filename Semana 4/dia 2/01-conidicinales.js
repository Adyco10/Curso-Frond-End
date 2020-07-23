//CONDICIONALES
debugger; // nos ayuda inspeccionar el codigo paso a paso 

let edad = +prompt(`ingrese su edad`);
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

if (edad > 17) {
    let peso = +prompt("cuanto pesas (Kgs.)");
    let altura =+prompt (`ingrese su estatura`)
    indiceMasaCorporal = peso/ (altura * altura);
    if (indiceMasaCorporal >= 30) {
        console.log(`no hay pase laboral`);
        console.log(`Esta usted en riesgo por exceso de peso 🐷 `);
        
    } else {
     console.log(`si hay pase laboral`);
     
  }
  console.log( `Su indice de masa coroporal  (IMC) es ${indiceMasaCorporal}`);
;
} else {
  console.log(`no hay pase laboral #quedate en casa`);
  console.log(` es ustede muy mocoso 😊`);
}
console.log( "fin del programa, hasta pronto");