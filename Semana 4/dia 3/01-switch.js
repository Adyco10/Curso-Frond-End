//switch
console.log( `
elegir opcion.
1. LOGIN
2. VER FACTURAS
3. REPORTAS `);
let rpta = +prompt("ingresar Opcion ;");

switch (rpta) {
    case  1:
        console.log( "Usted elegio iniciar sesion");
        // break es una sentencisa que sirve para romper la ejecucion 
        //del codigo restante en la estructra 
        break;
    case 2:
        console.log( "Usted desea ver las facturas");
     break;
    case 3:
        console.log("Usted desea ver reportes");
        break;
        default:
        console.log("ingrese una opcion Valida");
    }
    console.log("fin del programa");