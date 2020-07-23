//dado que el usuario ingresa un año calcular si es biciesto o no 
let anio = +prompt("ingrese el años a evaluar");
if ((anio % 4 === 0 && anio % 100 !==0) || anio % 400 ===0){
    console.log( `el año ${anio} es biciesto`);
}
else {
    console.log( `el año ${anio} NO es biciesto`);
}
