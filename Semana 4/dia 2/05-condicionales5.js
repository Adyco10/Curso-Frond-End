// programa para hallar el amyor de tres numeros
//no usar operadores logicos
//asumir q los 3  numeros son distintos
//debugger
let nro1 = 1445;
let nro2 = 1841;
let nro3 = 974;

//if ( nro1 > nro2){
//el numero 1 es mayor a l nro2
// if (nro1 > nro3){
// console.log(`el numero mayor es ${nro1}`);

//}  else{
//nro3 es mayor que el nro1
// console.log(`el numero mayor es ${nro3}`);
//}
//}else{
//el nro2 es le mayor
//console.log(`el numero mayor es ${nro2}`);
//}

//if ( nro2 > nro3){
//console.log(`el numero mayor es ${nro2}`);
//}else{
//    console.log(`el numero mayor es ${nro3}`);
//}
//}
if (nro1 > nro2) {
  if (nro1 > nro3) {
    console.log(`el numero mayor es ${nro1}`);
  } else {
    console.log(`el numero mayor es ${nro3}`);
  } 
}else {
    
  
  if(nro2 > nro3){
    console.log(`el numero mayor es ${nro2}`);
  }else {
    console.log(`el numero mayor es ${nro3}`);
  }
}
